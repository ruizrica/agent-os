# JavaScript Style Guide

## Context

Simple and elegant JavaScript/TypeScript coding guidelines for Agent OS projects.

## Core Principles

### Modern JavaScript
- Use ES6+ features and syntax
- Prefer `const` and `let` over `var`
- Use arrow functions when appropriate
- Implement proper async/await patterns
- Use destructuring and spread operators

### TypeScript Integration
- Use TypeScript for type safety
- Define explicit types for function parameters and return values
- Use interfaces for object shapes
- Leverage union types and generics
- Avoid `any` type when possible

## Code Style

### Formatting
- Use 2 spaces for indentation
- Use single quotes for strings
- Use semicolons consistently
- Maximum line length of 100 characters
- Use trailing commas in objects and arrays

### Naming Conventions
- **Variables and Functions**: camelCase (`userProfile`, `calculateTotal`)
- **Classes and Components**: PascalCase (`UserProfile`, `PaymentForm`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`, `MAX_RETRY_COUNT`)
- **Private Properties**: Prefix with underscore (`_privateMethod`)

## Best Practices

### Function Design
- Keep functions small and focused
- Use descriptive function names
- Prefer pure functions when possible
- Handle errors gracefully
- Use default parameters

### Async Operations
- Use async/await over Promises
- Handle errors with try/catch
- Use Promise.all for parallel operations
- Implement proper loading states
- Use proper timeout handling

### Error Handling
- Use custom error classes
- Implement proper error boundaries
- Log errors with context
- Provide meaningful error messages
- Handle network errors gracefully

## Example Code

### Function Structure
```javascript
// Good: Clear, typed function
const calculateUserScore = async (userId: string): Promise<number> => {
  try {
    const user = await fetchUser(userId);
    const activities = await fetchUserActivities(userId);
    
    return activities.reduce((score, activity) => {
      return score + activity.points;
    }, 0);
  } catch (error) {
    console.error('Failed to calculate user score:', error);
    throw new Error(`Unable to calculate score for user ${userId}`);
  }
};

// Good: Component with proper typing
interface UserProfileProps {
  userId: string;
  onUpdate: (user: User) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId, onUpdate }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const userData = await fetchUser(userId);
        setUser(userData);
      } catch (err) {
        setError('Failed to load user profile');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [userId]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!user) return <NotFound />;

  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};
```

### Error Handling
```javascript
// Custom error class
class ApiError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
    this.name = 'ApiError';
  }
}

// Error handling utility
const handleApiError = (error: unknown): string => {
  if (error instanceof ApiError) {
    return `API Error ${error.statusCode}: ${error.message}`;
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return 'An unknown error occurred';
};

// Usage
try {
  const data = await fetchData();
  return data;
} catch (error) {
  const errorMessage = handleApiError(error);
  console.error('API call failed:', errorMessage);
  throw new Error(errorMessage);
}
```

### State Management
```javascript
// Custom hook for API calls
const useApi = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
```

## Performance Tips

### Optimization
- Use `useMemo` and `useCallback` for expensive operations
- Implement proper memoization
- Avoid unnecessary re-renders
- Use lazy loading for components
- Optimize bundle size

### Memory Management
- Clean up event listeners
- Cancel ongoing requests
- Use proper dependency arrays
- Avoid memory leaks
- Implement proper cleanup functions
