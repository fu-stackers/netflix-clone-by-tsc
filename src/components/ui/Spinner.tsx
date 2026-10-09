function Spinner() {
  return (
    <div role="status" className="flex items-center justify-center py-20">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-red-600" />
      <span className="sr-only">Loading</span>
    </div>
  );
}

export default Spinner;