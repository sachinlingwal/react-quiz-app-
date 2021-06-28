const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "orangered",
        padding: 10,
        textAlign: "center",
        borderRadius: 10,
        marginBottom: 10,
        color: "white",
        textTransform: "uppercase",
        fontSize: 20,
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
