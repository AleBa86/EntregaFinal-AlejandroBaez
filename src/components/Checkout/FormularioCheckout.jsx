const FormularioCheckout = ({ dataForm, handleChangeInpunt, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              placeholder="Nombre"
              type="text"
              name="name"
              id="name"
              value={dataForm.name}
              onChange={handleChangeInpunt}
            />
            <label htmlFor="name">Nombre</label>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            placeholder="Telefono"
            type="number"
            name="phone"
            id="phone"
            value={dataForm.phone}
            onChange={handleChangeInpunt}
          />
          <label htmlFor="phone">Telefono</label>
        </div>

        <div className="form-floating mb-3">
          <input
            className="form-control"
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            value={dataForm.email}
            onChange={handleChangeInpunt}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            placeholder="Repetir email"
            type="text"
            name="repEmail"
            id="repEmail"
            value={dataForm.repEmail}
            onChange={handleChangeInpunt}
          />
          <label htmlFor="repEmail">Repetir email</label>
        </div>
        <button type="sumbit" className="btn btn-outline-dark">
          Enviar Orden
        </button>
      </form>
    </div>
  );
};

export default FormularioCheckout;
