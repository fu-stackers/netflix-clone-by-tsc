interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className="mx-4 my-8 rounded-md border border-red-600/50 bg-red-950/40 p-4 text-sm text-red-200 md:mx-12"
    >
      {message}
    </div>
  );
}

export default ErrorMessage;