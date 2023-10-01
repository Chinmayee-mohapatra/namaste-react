# Namaste React Episode - 08

# URLs

- MENU
- https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=225317&submitAction=ENTER/
- RESTAURANT LIST
- https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING

# Functional Components

# Class-based Components

# why is async not used for callback functions in useeffect react ?? Describe why it gets into the race condition for this scenario.

In React, the `useEffect` hook is used for managing side effects in functional components. It allows you to perform tasks like data fetching, DOM manipulation, or setting up subscriptions after the component has rendered. `useEffect` takes two arguments: a function (the effect itself) and an array of dependencies that determine when the effect should run.

The reason you generally don't use `async` functions as the callback in `useEffect` without handling them properly is because of how JavaScript's event loop and asynchronous code execution work. It's not that you can't use `async` functions, but you need to understand the implications.

Here's why using `async` functions directly in `useEffect` can lead to race conditions and unexpected behavior:

1. **Non-blocking Nature of `async` Functions:** An `async` function returns a promise immediately and continues executing the code following it without waiting for the promise to resolve. This means that if you use an `async` function as the callback in `useEffect`, it might not complete before the component is unmounted or before a subsequent effect is triggered.

2. **Race Conditions:** When you have multiple asynchronous operations inside your component, such as API calls or data fetching, using `async` functions directly in `useEffect` without proper control can lead to race conditions. Race conditions occur when the order of execution of asynchronous tasks becomes unpredictable, leading to bugs and incorrect data.

To handle `async` operations properly in `useEffect`:

1. **Use Cleanup Functions:** If your `async` function involves updating the component's state or DOM, you should use a cleanup function to cancel any ongoing operations when the component unmounts. This prevents memory leaks and unexpected behavior.

   ```jsx
   useEffect(() => {
     const fetchData = async () => {
       try {
         const result = await fetchSomeData();
         // Update state or perform other actions
       } catch (error) {
         // Handle errors
       }
     };

     fetchData();

     return () => {
       // Cleanup function to cancel ongoing operations
     };
   }, [dependencies]);
   ```

2. **Control Dependencies:** Ensure that you include all the dependencies that your `async` function relies on in the dependency array of `useEffect`. This helps prevent unexpected re-renders and ensures that your effect runs when the dependencies change.

   ```jsx
   useEffect(() => {
     async function fetchData() {
       // Async operation
     }

     fetchData();
   }, [dependencies]);
   ```

In summary, while you can use `async` functions within `useEffect`, it's important to understand their non-blocking nature and potential for race conditions. Properly managing async operations, including cleanup and dependency control, is essential to ensure your component behaves as expected and avoids unexpected side effects.
