function PrevButton({ dispatch, index }) {
  if (index > 0)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "prevQuestion" })}
        >
          Previous
        </button>
      </div>
    );
}

export default PrevButton;
