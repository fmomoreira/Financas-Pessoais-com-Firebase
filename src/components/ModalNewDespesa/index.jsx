import React from 'react'
import styles from './styles.css'

const modalNewDespesa = () => {
  return (
    <>
<div>

  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Adicionar despesa</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="description" className="col-form-label">Descrição:</label>
              <input type="text" className="form-control" id="description" placeholder="Supermercado" />
            </div>
            <div className="form-group">
              <label htmlFor="price" className="col-form-label">Valor:</label>
              <input type="number" className="form-control" id="price" placeholder="Ex: R$ 125,90" />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary " data-dismiss="modal">Cancelar</button>
          <button type="button" className="btn btn-primary color-default">Adicionar</button>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  )
} 


export default modalNewDespesa