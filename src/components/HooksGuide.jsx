import { useMemo, useState } from "react";
import styles from "./HooksGuide.module.css";

const hookGroups = [
  {
    title: "React hooks in this app",
    description: "These built-in hooks are used by the movie screens, providers, and route guards.",
    hooks: [
      {
        name: "useState",
        source: "App.jsx, About.jsx, AuthProvider.jsx",
        when: "Stores changing component or provider data and gives you a setter that triggers a re-render.",
        code: `const [movieData, setMovieData] = useState(movies1);

setMovieData((movieslist) => [
  ...movieslist,
  newMovie,
]);`,
      },
      {
        name: "useEffect",
        source: "App.jsx, AddMovie.jsx",
        when: "Runs synchronization work after render. App.jsx uses it to load movie data from APIs.",
        code: `useEffect(() => {
  const loadMovies = async () => {
    const response = await getMovies();
    setMovieData(response.data);
  };

  loadMovies();
}, []);`,
      },
      {
        name: "useContext",
        source: "Login.jsx, ProtectedRoute.jsx",
        when: "Reads shared values supplied by a context provider without passing props through every component.",
        code: `const { user } = useContext(AuthContext);

return user
  ? children
  : <Navigate to="/login" />;`,
      },
      {
        name: "useCallback",
        source: "App.jsx",
        when: "Keeps the same function reference between renders. App.jsx passes this delete handler to About.",
        code: `const deleteMovie = useCallback((id) => {
  setMovieData((prev) =>
    prev.filter((movie) => movie.id != id),
  );
}, []);`,
      },
      {
        name: "useReducer",
        source: "AddMovieByReducer.jsx",
        when: "Manages related state transitions through actions and a reducer function.",
        code: `const [state, dispatchFn] = useReducer(
  movieReducer,
  initialState,
);

dispatchFn({ type: "SET_NAME", payload: name });`,
      },
      {
        name: "useMemo",
        source: "MovieList.jsx",
        when: "Caches the filtered movie list until the movies or search text changes.",
        code: `const filteredMovies = useMemo(() => {
  return movies.filter((movie) =>
    movie.name.toLowerCase().includes(search),
  );
}, [movies, search]);`,
      },
    ],
  },
  {
    title: "Custom and library hooks",
    description: "These hooks connect the UI to Redux, navigation, URL parameters, and application data.",
    hooks: [
      {
        name: "useMovies",
        source: "hooks/useMovies.js",
        when: "A custom hook that packages the Redux movie selectors into one reusable API.",
        code: `const useMovies = () => {
  const movies = useSelector(
    (state) => state.movies.movies,
  );
  const loading = useSelector(
    (state) => state.movies.loading,
  );
  return { movies, loading, error };
};`,
      },
      {
        name: "useSelector",
        source: "hooks/useMovies.js",
        when: "Reads a selected value from the Redux store and updates the component when that value changes.",
        code: `const movies = useSelector(
  (state) => state.movies.movies,
);
const loading = useSelector(
  (state) => state.movies.loading,
);`,
      },
      {
        name: "useDispatch",
        source: "App.jsx, Movie.jsx, AddMovieByReducer.jsx",
        when: "Returns the Redux dispatch function used to send actions to the store.",
        code: `const dispatch = useDispatch();

dispatch(fetchMovies());`,
      },
      {
        name: "useNavigate",
        source: "Login.jsx, AddMovie.jsx",
        when: "Navigates to another route from an event handler or after an action completes.",
        code: `const navigate = useNavigate();

function handleLogin(user) {
  login(user);
  navigate("/about");
}`,
      },
      {
        name: "useParams",
        source: "AddMovie.jsx, MovieData.jsx",
        when: "Reads dynamic values captured from the current route path.",
        code: `// Route: /add-movie/:id/:name/:title
const { name } = useParams();

return <h2>Editing {name}</h2>;`,
      },
      {
        name: "useSearchParams",
        source: "AddMovie.jsx",
        when: "Reads and updates the query string in the browser URL.",
        code: `const [query, setQuery] = useSearchParams();
const movieId = query.get("id");

setQuery({ id: "42" });`,
      },
    ],
  },
];

const allHooks = hookGroups.flatMap((group) => group.hooks);

const HooksGuide = () => {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleGroups = useMemo(
    () =>
      hookGroups
        .map((group) => ({
          ...group,
          hooks: group.hooks.filter((hook) =>
            `${hook.name} ${hook.source} ${hook.when}`
              .toLowerCase()
              .includes(normalizedQuery),
          ),
        }))
        .filter((group) => group.hooks.length > 0),
    [normalizedQuery],
  );

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>This repository&apos;s reference</p>
        <h1>Hooks, in context.</h1>
        <p className={styles.intro}>
          Every hook documented here is used by this movie app, with examples
          taken from its components, providers, and state layers.
        </p>
        <label className={styles.searchLabel} htmlFor="hook-search">
          Find a hook or file
        </label>
        <input
          id="hook-search"
          className={styles.search}
          type="search"
          placeholder="Try useEffect or MovieList.jsx"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <p className={styles.count}>
          Showing {visibleGroups.reduce((total, group) => total + group.hooks.length, 0)} of {allHooks.length} hooks used in this app
        </p>
      </header>

      <div className={styles.content}>
        {visibleGroups.length > 0 ? (
          visibleGroups.map((group) => (
            <section className={styles.group} key={group.title}>
              <div className={styles.groupHeading}>
                <p className={styles.groupKicker}>Chapter</p>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
              <div className={styles.hookGrid}>
                {group.hooks.map((hook, index) => (
                  <article
                    className={styles.hookCard}
                    key={hook.name}
                    style={{ "--card-index": index }}
                  >
                    <div className={styles.cardTopline}>
                      <span className={styles.number}>0{index + 1}</span>
                      <h3>{hook.name}</h3>
                    </div>
                    <p className={styles.source}>{hook.source}</p>
                    <p className={styles.when}>{hook.when}</p>
                    <pre><code>{hook.code}</code></pre>
                  </article>
                ))}
              </div>
            </section>
          ))
        ) : (
          <p className={styles.empty}>No hooks match &quot;{query}&quot;.</p>
        )}
      </div>
    </main>
  );
};

export default HooksGuide;
