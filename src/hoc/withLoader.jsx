const withLoader = (WrappedComponent) => {
  return function (props) {
    if (props.loading) {
      return <h2>Loading...</h2>;
    }
    if (props.error) {
      return <h2>{props.error}</h2>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoader;
