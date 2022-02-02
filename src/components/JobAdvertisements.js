import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../services/JobAdvertisementService";
import styles from "../styles/jobadvertisement.module.css";
export default function JobAdvertisements() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisement = new JobAdvertisementService();
    jobAdvertisement
      .getAllinActives()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 ">
      {jobAdvertisements.map((item) => (
        <div className="col " key={item.id}>
          <div className={styles.card + " card text-dark bg-light "}>
            <div className="card-body">
              <h5 className="card-title">
                <strong>Firma : {item.companyName}</strong>
              </h5>
              <hr />
              <div className="card-text">
                <ul>
                  <li>
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <div className="row justify-content-between">
                          <div className="col-7">Lokasyon</div>
                          <div className="col-5">:</div>
                        </div>
                      </div>
                      <div className="col-6">{item.cityName}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <div className="row justify-content-between">
                          <div className="col-7">Posizyon</div>
                          <div className="col-5">:</div>
                        </div>
                      </div>
                      <div className="col-6">{item.jobTitle}</div>
                    </div>
                  </li>

                  <li>
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <div className="row justify-content-between">
                          <div className="col-7">Deneyim</div>
                          <div className="col-5">:</div>
                        </div>
                      </div>
                      <div className="col-6">{item.positionDescription}</div>
                    </div>
                  </li>

                  <li>
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <div className="row justify-content-between">
                          <div className="col-7">Çalışma zamanı</div>
                          <div className="col-5">:</div>
                        </div>
                      </div>
                      <div className="col-6">{item.workTimeType}</div>
                    </div>
                  </li>

                  <li>
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <div className="row justify-content-between">
                          <div className="col-7">Çalışma tipi</div>
                          <div className="col-5">:</div>
                        </div>
                      </div>
                      <div className="col-6">{item.workType}</div>
                    </div>
                  </li>

                  <li>
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <div className="row justify-content-between">
                          <div className="col-7">Açık pozisyon</div>
                          <div className="col-5">:</div>
                        </div>
                      </div>
                      <div className="col-6">{item.openPosition}</div>
                    </div>
                  </li>

                  <li>
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <div className="row justify-content-between">
                          <div className="col-7">Min Maaş</div>
                          <div className="col-5">:</div>
                        </div>
                      </div>
                      <div className="col-6">{item.minSalary} TL</div>
                    </div>
                  </li>

                  <li>
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <div className="row justify-content-between">
                          <div className="col-7">Max Maaş</div>
                          <div className="col-5">:</div>
                        </div>
                      </div>
                      <div className="col-6">{item.maxSalary} TL</div>
                    </div>
                  </li>

                  <li>
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <div className="row justify-content-between">
                          <div className="col-7">Son Baş.Tar.</div>
                          <div className="col-5">:</div>
                        </div>
                      </div>
                      <div className="col-6">{item.lasApplyDate}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
