export default function SubmitMessage({ errorMessage, show }) {
  if (show) {
    return (
      <div
        style={{
          background: "#00000060",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "green",
            fontSize: "34px",
            background: "white",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            maxWidth: "1200px",
            borderRadius: "12px",
            textTransform: "capitalize",
          }}
        >
          {errorMessage}
        </div>
      </div>
    );
  }
}
