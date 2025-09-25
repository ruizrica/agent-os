// ABOUTME: Utility functions for enhanced Agent OS workflow management
// ABOUTME: Provides template processing, validation, and workflow orchestration helpers

/**
 * Template processing utilities for rapid prototyping
 */
class TemplateProcessor {
  constructor() {
    this.templates = {};
    this.variables = {};
  }

  /**
   * Load template from JSON file
   * @param {string} templatePath - Path to template file
   * @param {string} templateName - Name to assign to template
   */
  async loadTemplate(templatePath, templateName) {
    try {
      const template = await import(templatePath);
      this.templates[templateName] = template.default || template;
      return this.templates[templateName];
    } catch (error) {
      throw new Error(`Failed to load template ${templateName}: ${error.message}`);
    }
  }

  /**
   * Generate workflow instance from template
   * @param {string} templateName - Template to use
   * @param {object} variables - Variables to substitute
   * @returns {object} Generated workflow instance
   */
  generateWorkflow(templateName, variables = {}) {
    if (!this.templates[templateName]) {
      throw new Error(`Template ${templateName} not found`);
    }

    const template = JSON.parse(JSON.stringify(this.templates[templateName]));
    return this.substituteVariables(template, variables);
  }

  /**
   * Substitute variables in template recursively
   * @param {any} obj - Object to process
   * @param {object} variables - Variables to substitute
   * @returns {any} Processed object
   */
  substituteVariables(obj, variables) {
    if (typeof obj === 'string') {
      return obj.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return variables[key] || match;
      });
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.substituteVariables(item, variables));
    }

    if (typeof obj === 'object' && obj !== null) {
      const result = {};
      for (const [key, value] of Object.entries(obj)) {
        result[key] = this.substituteVariables(value, variables);
      }
      return result;
    }

    return obj;
  }
}

/**
 * Workflow validation utilities
 */
class WorkflowValidator {
  /**
   * Validate workflow structure
   * @param {object} workflow - Workflow to validate
   * @returns {object} Validation result with errors and warnings
   */
  validateWorkflow(workflow) {
    const errors = [];
    const warnings = [];

    // Check required sections
    const requiredSections = ['metadata', 'sections'];
    for (const section of requiredSections) {
      if (!workflow[section]) {
        errors.push(`Missing required section: ${section}`);
      }
    }

    // Check metadata completeness
    if (workflow.metadata) {
      const requiredMetadata = ['template_name', 'focus_area'];
      for (const field of requiredMetadata) {
        if (!workflow.metadata[field]) {
          warnings.push(`Missing metadata field: ${field}`);
        }
      }
    }

    // Check phases structure
    if (workflow.sections) {
      const phasesKeys = Object.keys(workflow.sections).filter(key =>
        key.includes('phases') || key.includes('phase')
      );

      for (const phasesKey of phasesKeys) {
        const phases = workflow.sections[phasesKey];
        if (typeof phases === 'object') {
          for (const [phaseName, phase] of Object.entries(phases)) {
            if (!phase.deliverables || !Array.isArray(phase.deliverables)) {
              warnings.push(`Phase ${phaseName} missing deliverables array`);
            }
            if (!phase.success_criteria || !Array.isArray(phase.success_criteria)) {
              warnings.push(`Phase ${phaseName} missing success_criteria array`);
            }
          }
        }
      }
    }

    return {
      valid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate checkpoint timing
   * @param {array} checkpoints - List of checkpoint strings
   * @returns {boolean} Whether checkpoints are properly timed
   */
  validateCheckpointTiming(checkpoints) {
    if (!Array.isArray(checkpoints)) return false;

    // Extract day/week numbers from checkpoint strings
    const timings = checkpoints.map(checkpoint => {
      const dayMatch = checkpoint.match(/Day (\d+)/);
      const weekMatch = checkpoint.match(/Week (\d+)/);

      if (dayMatch) return parseInt(dayMatch[1]);
      if (weekMatch) return parseInt(weekMatch[1]) * 7;
      return 0;
    }).filter(timing => timing > 0);

    // Check if timings are in ascending order
    for (let i = 1; i < timings.length; i++) {
      if (timings[i] <= timings[i - 1]) {
        return false;
      }
    }

    return true;
  }
}

/**
 * Quick iteration helpers
 */
class IterationHelper {
  /**
   * Generate quick feedback loops for workflow
   * @param {string} focusArea - Focus area of workflow
   * @param {number} totalDays - Total days for workflow
   * @returns {array} Array of feedback checkpoints
   */
  generateFeedbackLoops(focusArea, totalDays = 14) {
    const checkpoints = [];
    const interval = Math.max(1, Math.floor(totalDays / 5));

    const checkpointTemplates = {
      technical: [
        'Architecture review',
        'Code quality check',
        'Integration testing',
        'Performance validation',
        'Security audit'
      ],
      product: [
        'User feedback collection',
        'Feature validation',
        'Usability testing',
        'Market response analysis',
        'Stakeholder review'
      ],
      research: [
        'Methodology validation',
        'Preliminary results review',
        'Peer feedback session',
        'Data quality check',
        'Hypothesis refinement'
      ]
    };

    const templates = checkpointTemplates[focusArea] || checkpointTemplates.technical;

    for (let i = 0; i < templates.length && i * interval < totalDays; i++) {
      const day = Math.min((i + 1) * interval, totalDays);
      checkpoints.push(`Day ${day}: ${templates[i]}`);
    }

    return checkpoints;
  }

  /**
   * Calculate optimal sprint breakdown
   * @param {number} totalDays - Total project days
   * @param {number} sprintLength - Preferred sprint length
   * @returns {array} Array of sprint configurations
   */
  calculateSprintBreakdown(totalDays, sprintLength = 7) {
    const sprints = [];
    const numberOfSprints = Math.ceil(totalDays / sprintLength);

    for (let i = 0; i < numberOfSprints; i++) {
      const startDay = i * sprintLength + 1;
      const endDay = Math.min((i + 1) * sprintLength, totalDays);

      sprints.push({
        sprint: i + 1,
        start_day: startDay,
        end_day: endDay,
        duration: endDay - startDay + 1,
        focus: this.getSprintFocus(i + 1, numberOfSprints)
      });
    }

    return sprints;
  }

  /**
   * Get focus area for sprint based on position
   * @param {number} sprintNumber - Current sprint number
   * @param {number} totalSprints - Total number of sprints
   * @returns {string} Focus area for sprint
   */
  getSprintFocus(sprintNumber, totalSprints) {
    const ratio = sprintNumber / totalSprints;

    if (ratio <= 0.3) return 'foundation';
    if (ratio <= 0.7) return 'development';
    return 'refinement';
  }
}

/**
 * Configuration generator for enhanced workflows
 */
class ConfigGenerator {
  /**
   * Generate agent configuration for workflow
   * @param {object} workflow - Workflow definition
   * @returns {object} Agent configuration
   */
  generateAgentConfig(workflow) {
    const config = {
      agents: {},
      coordination: {
        mode: 'parallel',
        sync_points: [],
        communication: 'shared_context'
      },
      execution: {
        timeout: 3600,
        retry_count: 3,
        checkpoint_frequency: 'daily'
      }
    };

    // Determine required agents based on focus area
    const focusArea = workflow.metadata?.focus_area;

    switch (focusArea) {
      case 'technical':
        config.agents = {
          architect: { role: 'system_design', priority: 'high' },
          developer: { role: 'implementation', priority: 'high' },
          tester: { role: 'quality_assurance', priority: 'medium' },
          devops: { role: 'deployment', priority: 'medium' }
        };
        break;

      case 'product':
        config.agents = {
          product_manager: { role: 'requirements', priority: 'high' },
          designer: { role: 'user_experience', priority: 'high' },
          researcher: { role: 'user_research', priority: 'medium' },
          analyst: { role: 'metrics', priority: 'medium' }
        };
        break;

      case 'research':
        config.agents = {
          researcher: { role: 'investigation', priority: 'high' },
          analyst: { role: 'data_analysis', priority: 'high' },
          reviewer: { role: 'peer_review', priority: 'medium' },
          writer: { role: 'documentation', priority: 'medium' }
        };
        break;
    }

    // Extract sync points from checkpoints
    if (workflow.sections?.rapid_iteration_checkpoints) {
      config.coordination.sync_points = workflow.sections.rapid_iteration_checkpoints.map(
        checkpoint => ({
          timing: checkpoint,
          type: 'review',
          participants: Object.keys(config.agents)
        })
      );
    }

    return config;
  }
}

// Export utilities
export {
  TemplateProcessor,
  WorkflowValidator,
  IterationHelper,
  ConfigGenerator
};