// Bootstrap Loader
function Loading() {
  return (
    <>
      {/* row justify-content-md-center pt-4 */}
      <div className="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Loading;
