interface AlertErrorComponentProps {
  msg: string;
  onClose: () => void;
}

const AlertErrorComponent: React.FC<AlertErrorComponentProps> = ({
  msg,
  onClose,
}) => {
  return (
    <div style={{ backgroundColor: "red", color: "white", padding: "10px" }}>
      {msg}
      <button onClick={onClose} style={{ marginLeft: "20px" }}>
        Cerrar
      </button>
    </div>
  );
};

const AlertOkComponent: React.FC<AlertErrorComponentProps> = ({
  msg,
  onClose,
}) => {
  return (
    <div className = "normal-case text-white rounded drop-shadow-md  bg-green-700 hover:bg-green-900" style={{ padding: "10px" }}>
      {msg}
      <button className = "text-white normal-case" onClick={onClose} style={{ marginLeft: "100px" }}>
        Cerrar
      </button>
    </div>
  );
};

export  { AlertErrorComponent, AlertOkComponent };
