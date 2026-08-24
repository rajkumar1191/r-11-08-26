import { useReducer } from "react";
import "./../App.css";

const initialState = {
  values: {
    movieName: "",
    director: "",
    year: "",
    genre: "",
    rating: "",
  },
  errors: {},
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value,
        },
        errors: {
          ...state.errors,
          [action.field]: "",
        },
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload,
      };
    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
};

const AddMovieByReducer = ({ passData }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const { values, errors } = state;

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      dispatch({
        type: "SET_ERRORS",
        payload: validationErrors,
      });

      return;
    }

    passData({ name: values.movieName, year: values.year });
    dispatch({
      type: "RESET_FORM",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!values.movieName.trim()) {
      newErrors.movieName = "Movie Name is required";
    }

    if (!values.director.trim()) {
      newErrors.director = "Director Name is required";
    }

    if (!values.genre.trim()) {
      newErrors.genre = "Genre is required";
    }
    if (!values.year.trim()) {
      newErrors.year = "Movie year is required";
    }
    if (!values.rating.trim()) {
      newErrors.rating = "Movie Rating is required";
    }

    return newErrors;
  };

  return (
    <div>
      <input
        name="movieName"
        value={values.movieName}
        onChange={handleChange}
        type="text"
        placeholder="Enter Movie Name"
      />
      {errors.movieName && <p style={{ color: "red" }}>{errors.movieName}</p>}

      <br />
      <br />

      <input
        name="director"
        value={values.director}
        onChange={handleChange}
        type="text"
        placeholder="Enter Director Name"
      />
      {errors.director && <p style={{ color: "red" }}>{errors.director}</p>}

      <br />
      <br />
      <input
        name="year"
        value={values.year}
        onChange={handleChange}
        type="text"
        placeholder="Enter Movie Released Year"
      />
      {errors.year && <p style={{ color: "red" }}>{errors.year}</p>}

      <br />
      <br />
      <input
        name="genre"
        value={values.genre}
        onChange={handleChange}
        type="text"
        placeholder="Enter Movie Genre"
      />
      {errors.genre && <p style={{ color: "red" }}>{errors.genre}</p>}

      <br />
      <br />
      <input
        name="rating"
        value={values.rating}
        onChange={handleChange}
        type="text"
        placeholder="Enter Movie Rating"
      />
      {errors.rating && <p style={{ color: "red" }}>{errors.rating}</p>}

      <br />
      <br />
      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AddMovieByReducer;
