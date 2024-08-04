import React from 'react'
import { Link } from 'react-router-dom'

const StudentContentEvent = () => {
  return (
    <div>
      <div className='page-wrapper'>
        <div className='content container-fluid'>
          <div className='page-header'>
            <div className='row align-items-center'>
              <div className='col'>
                <h3 className='page-title'>Agenda</h3>
                <ul className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to="/student">Accueil</Link>
                  </li>
                  <li className='breadcrumb-item active'>Events</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='page-header'>
            <div className='row align-items-center'>
              <div className='col'></div>
              <div className='col-auto text-end float-end ms-auto'>
                <a href='add-events.html' className='btn btn-primary'>
                  <i className='fas fa-plus'></i>
                </a>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='card'>
                <div className='card-body'>
                  <div id='calendar'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='modal fade none-border' id='my_event'>
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h4 className='modal-title'>Ajouter Event</h4>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-hidden='true'
                  >
                    &times;
                  </button>
                </div>
                <div className='modal-body'></div>
                <div className='modal-footer justify-content-center'>
                  <button
                    type='button'
                    className='btn btn-success save-event submit-btn'
                  >
                    Créer un Event
                  </button>
                  <button
                    type='button'
                    className='btn btn-danger delete-event submit-btn'
                    data-dismiss='modal'
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default StudentContentEvent
