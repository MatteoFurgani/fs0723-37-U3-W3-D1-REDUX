import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"; // Aggiunto import
import { addFavorite } from "../redux/reducers/favoritesSlice"; // Aggiunto import
import { Link } from "react-router-dom";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const dispatch = useDispatch(); // Inizializzato dispatch

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Funzione per gestire il click sul pulsante di aggiunta ai preferiti
  const handleAddFavorite = () => {
    dispatch(addFavorite(params.company)); // Aggiunto il nome dell'azienda ai preferiti
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>

          {jobs.map((jobData) => (
            <div key={jobData._id}>
              <Job data={jobData} />
              <button onClick={handleAddFavorite}>Add to Favorites</button>{" "}
              {/* Aggiunto il pulsante */}
            </div>
          ))}
        </Col>
        <Col xs={10} className="mx-auto">
          {/* Aggiungi un Link per navigare alla pagina dei preferiti */}
          <Link to="/favorites">Go to Favorites</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
