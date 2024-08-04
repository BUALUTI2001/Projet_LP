import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavBar from './AdminNavBar'
import AdminSideBar from './AdminSideBar'
import Footer from './Footer'

const AdminScreen = () => {
  return (
    <div>
      <div className='main-wrapper'>
      {/*Barre Menu Admin*/}
        <AdminNavBar/>

        {/*SideBar */}
        <AdminSideBar/>

        {/*Contenu */}
        <div className='page-wrapper'>
        <div className='content container-fluid'>
            <div className='page-header'>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='page-sub-header'>
                    <h3 className='page-title'>Bienvenue à cher Administrateur</h3>
                    <ul className='breadcrumb'>
                      <li className='breadcrumb-item'>
                          <Link to="/student">Accueil</Link>
                      </li>
                      <li className='breadcrumb-item active'>Admin</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='row'>
              <div className='col-xl-3 col-sm-6 col-12 d-flex'>
                <div className='card bg-comman w-100'>
                  <div className='card-body'>
                    <div className='db-widgets d-flex justify-content-between align-items-center'>
                      <div className='db-info'>
                        <h6>Nombre de Cours Théoriques</h6>
                        <h3>04/11</h3>
                      </div>
                      <div className='db-icon'>
                        <img
                          src='assets/img/icons/teacher-icon-01.svg'
                          alt='Dashboard Icon'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-sm-6 col-12 d-flex'>
                <div className='card bg-comman w-100'>
                  <div className='card-body'>
                    <div className='db-widgets d-flex justify-content-between align-items-center'>
                      <div className='db-info'>
                        <h6>Total heures travaux pratiques</h6>
                        <h3>40/60</h3>
                      </div>
                      <div className='db-icon'>
                        <img
                          src='assets/img/icons/teacher-icon-02.svg'
                          alt='Dashboard Icon'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-sm-6 col-12 d-flex'>
                <div className='card bg-comman w-100'>
                  <div className='card-body'>
                    <div className='db-widgets d-flex justify-content-between align-items-center'>
                      <div className='db-info'>
                        <h6>Total heure travaux dirigés</h6>
                        <h3>30/50</h3>
                      </div>
                      <div className='db-icon'>
                        <img
                          src='assets/img/icons/student-icon-01.svg'
                          alt='Dashboard Icon'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-sm-6 col-12 d-flex'>
                <div className='card bg-comman w-100'>
                  <div className='card-body'>
                    <div className='db-widgets d-flex justify-content-between align-items-center'>
                      <div className='db-info'>
                        <h6>Nombre d'Epreuves annuel</h6>
                        <h3>10/20</h3>
                      </div>
                      <div className='db-icon'>
                        <img
                          src='assets/img/icons/student-icon-02.svg'
                          alt='Dashboard Icon'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className='row'>
              <div className='col-12 col-lg-12 col-xl-8'>
                <div className='card flex-fill comman-shadow'>
                  <div className='card-header'>
                    <div className='row align-items-center'>
                      <div className='col-6'>
                        <h5 className='card-title'>Matière du Jour</h5>
                      </div>
                      <div className='col-6'>
                        <ul className='chart-list-out'>
                          <li>
                            <span className='circle-blue'></span>
                            <span className='circle-gray'></span>
                            <span className='circle-gray'></span>
                          </li>
                          <li className='lesson-view-all'>
                            <a href='#'>Voir plus</a>
                          </li>
                          <li className='star-menus'>
                            <a href='javascript:;'>
                              <i className='fas fa-ellipsis-v'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='dash-circle'>
                    <div className='row'>
                      <div className='col-lg-3 col-md-3 dash-widget1'>
                        <div className='circle-bar circle-bar2'>
                          <div className='circle-graph2' data-percent='80'>
                            <b>80%</b>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-3'>
                        <div className='dash-details'>
                          <div className='lesson-activity'>
                            <div className='lesson-imgs'>
                              <img
                                src='assets/img/icons/lesson-icon-01.svg'
                                alt=''
                              />
                            </div>
                            <div className='views-lesson'>
                              <h5>Promotion</h5>
                              <h4>Promotion_DB</h4>
                            </div>
                          </div>
                          <div className='lesson-activity'>
                            <div className='lesson-imgs'>
                              <img
                                src='assets/img/icons/lesson-icon-02.svg'
                                alt=''
                              />
                            </div>
                            <div className='views-lesson'>
                              <h5>Cours Week</h5>
                              <h4>8 Cours</h4>
                            </div>
                          </div>
                          <div className='lesson-activity'>
                            <div className='lesson-imgs'>
                              <img
                                src='assets/img/icons/lesson-icon-03.svg'
                                alt=''
                              />
                            </div>
                            <div className='views-lesson'>
                              <h5>heure</h5>
                              <h4>Cours</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-3'>
                        <div className='dash-details'>
                          <div className='lesson-activity'>
                            <div className='lesson-imgs'>
                              <img
                                src='assets/img/icons/lesson-icon-04.svg'
                                alt=''
                              />
                            </div>
                            <div className='views-lesson'>
                              <h5>Rendez-Vous</h5>
                              <h4>5 Rendez-Vous</h4>
                            </div>
                          </div>
                          <div className='lesson-activity'>
                            <div className='lesson-imgs'>
                              <img
                                src='assets/img/icons/lesson-icon-05.svg'
                                alt=''
                              />
                            </div>
                            <div className='views-lesson'>
                              <h5>Staff</h5>
                              <h4>Ephraim BUALUTI</h4>
                            </div>
                          </div>
                          <div className='lesson-activity'>
                            <div className='lesson-imgs'>
                              <img
                                src='assets/img/icons/lesson-icon-06.svg'
                                alt=''
                              />
                            </div>
                            <div className='views-lesson'>
                              <h5>Cours Terminé</h5>
                              <h4>4/11</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-3 d-flex align-items-center justify-content-center'>
                        <div className='skip-group'>
                          <button
                            type='submit'
                            className='btn btn-info skip-btn'
                          >
                            Voir plus
                          </button>
                          <button
                            type='submit'
                            className='btn btn-info continue-btn'
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 col-lg-12 col-xl-12 d-flex'>
                    <div className='card flex-fill comman-shadow'>
                      <div className='card-header'>
                        <div className='row align-items-center'>
                          <div className='col-6'>
                            <h5 className='card-title'>Activités Académiques</h5>
                          </div>
                          <div className='col-6'>
                            <ul className='chart-list-out'>
                              <li>
                                <span className='circle-blue'></span>Professeur
                              </li>
                              <li>
                                <span className='circle-green'></span>Etudiant
                              </li>
                              <li className='star-menus'>
                                <a href='javascript:;'>
                                  <i className='fas fa-ellipsis-v'></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='card-body'>
                        <div id='apexcharts-area'></div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-lg-12 col-xl-12 d-flex'>
                    <div className='card flex-fill comman-shadow'>
                      <div className='card-header d-flex align-items-center'>
                        <h5 className='card-title'>Cours Passés</h5>
                        <ul className='chart-list-out student-ellips'>
                          <li className='star-menus'>
                            <a href='javascript:;'>
                              <i className='fas fa-ellipsis-v'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='card-body'>
                        <div className='teaching-card'>
                          <ul className='steps-history'>
                            <li>Av22</li>
                            <li>Mai23</li>
                            <li>Juil24</li>
                          </ul>
                          <ul className='activity-feed'>
                            <li className='feed-item d-flex align-items-center'>
                              <div className='dolor-activity'>
                                <span className='feed-text1'>
                                  <a>Centrales et Réseaux Electriques</a>
                                </span>
                                <ul className='teacher-date-list'>
                                  <li>
                                    <i className='fas fa-calendar-alt me-2'></i>
                                    September 5, 2023
                                  </li>
                                  <li>|</li>
                                  <li>
                                    <i className='fas fa-clock me-2'></i>08:30
                                    am - 12:30 am (4 Heures)
                                  </li>
                                </ul>
                              </div>
                              <div className='activity-btns ms-auto'>
                                <button type='submit' className='btn btn-info'>
                                  In Progress
                                </button>
                              </div>
                            </li>
                            <li className='feed-item d-flex align-items-center'>
                              <div className='dolor-activity'>
                                <span className='feed-text1'>
                                  <a>MPGC </a>
                                </span>
                                <ul className='teacher-date-list'>
                                  <li>
                                    <i className='fas fa-calendar-alt me-2'></i>
                                    September 5, 2023
                                  </li>
                                  <li>|</li>
                                  <li>
                                    <i className='fas fa-clock me-2'></i>02:00
                                    pm - 06:00 pm (4 Heures)
                                  </li>
                                </ul>
                              </div>
                              <div className='activity-btns complete ms-auto'>
                                <button type='submit' className='btn btn-info'>
                                  Completed
                                </button>
                              </div>
                            </li>
                            <li className='feed-item d-flex align-items-center'>
                              <div className='dolor-activity'>
                                <span className='feed-text1'>
                                  <a>Mathématiques Appliquées</a>
                                </span>
                                <ul className='teacher-date-list'>
                                  <li>
                                    <i className='fas fa-calendar-alt me-2'></i>
                                    September 6, 2023
                                  </li>
                                  <li>|</li>
                                  <li>
                                    <i className='fas fa-clock me-2'></i>08:30
                                    am - 12:30 am (4 Heures)
                                  </li>
                                </ul>
                              </div>
                              <div className='activity-btns ms-auto'>
                                <button type='submit' className='btn btn-info'>
                                  In Progress
                                </button>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-12 col-xl-4 d-flex'>
                <div className='card flex-fill comman-shadow'>
                  <div className='card-body'>
                    <div
                      id='calendar-doctor'
                      className='calendar-container'
                    ></div>
                    <div className='calendar-info calendar-info1'>
                      <div className='up-come-header'>
                        <h2>Activités à venir</h2>
                        <span>
                          <a href='javascript:;'>
                            <i className='feather-plus'></i>
                          </a>
                        </span>
                      </div>
                      <div className='upcome-event-date'>
                        <h3>05 Août</h3>
                        <span>
                          <i className='fas fa-ellipsis-h'></i>
                        </span>
                      </div>
                      <div className='calendar-details'>
                        <p>08:30 am</p>
                        <div className='calendar-box normal-bg'>
                          <div className='calandar-event-name'>
                            <h4>Examen d'EM (3GEI)</h4>
                            <h5>Professeur LIASSA NKOY</h5>
                          </div>
                          <span>4 hours</span>
                        </div>
                      </div>
                      <div className='calendar-details'>
                        <p>4:00 pm</p>
                        <div className='calendar-box normal-bg'>
                          <div className='calandar-event-name'>
                            <h4>Journée Scientifique</h4>
                            <h5>Conférence KCC</h5>
                          </div>
                          <span>04:00 - 6:00 pm</span>
                        </div>
                      </div>
                      <div className='calendar-details'>
                        <p>10:00 am</p>
                        <div className='calendar-box normal-bg'>
                          <div className='calandar-event-name'>
                            <h4>Remise Rapport Labo</h4>
                            <h5>Machines Electriques</h5>
                          </div>
                          <span>Deadline : 06:00 pm</span>
                        </div>
                      </div>
                      <div className='upcome-event-date'>
                        <h3>10 Jan</h3>
                        <span>
                          <i className='fas fa-ellipsis-h'></i>
                        </span>
                      </div>
                      <div className='calendar-details'>
                        <p>08:30 am</p>
                        <div className='calendar-box normal-bg'>
                          <div className='calandar-event-name'>
                            <h4>MPGC</h4>
                            <h5>Exposé et Laboratoire</h5>
                          </div>
                          <span>08:30 - 10:30 am</span>
                        </div>
                      </div>
                      <div className='calendar-details'>
                        <p>10:30 am</p>
                        <div className='calendar-box normal-bg'>
                          <div className='calandar-event-name'>
                            <h4>Eléments de Technologie </h4>
                            <h5>Dernière Séance</h5>
                          </div>
                          <span>10:30 - 12:30 am</span>
                        </div>
                      </div>
                      <div className='calendar-details'>
                        <p>02:30 pm</p>
                        <div className='calendar-box normal-bg'>
                          <div className='calandar-event-name'>
                            <h4>Pause</h4>
                            <h5>Etudes en groupe</h5>
                          </div>
                          <span>12:30 - 02:00 pm</span>
                        </div>
                      </div>
                      <div className='calendar-details'>
                        <p>02:00 pm</p>
                        <div className='calendar-box break-bg'>
                          <div className='calandar-event-name'>
                            <h4>Langage de Programmation</h4>
                            <h5>Examen LP</h5>
                          </div>
                          <span>02:00 - 04:00 pm</span>
                        </div>
                      </div>
                      <div className='calendar-details'>
                        <p>04:00 am</p>
                        <div className='calendar-box normal-bg'>
                          <div className='calandar-event-name'>
                            <h4>Labo</h4>
                            <h5>Labo Machines Electriques</h5>
                          </div>
                          <span>04:00 - 06:00 pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default AdminScreen
