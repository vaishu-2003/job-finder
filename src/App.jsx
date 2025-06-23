import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchJobs } from "./api";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query, location) => {
    setLoading(true);
    const results = await fetchJobs(query, location);
    setJobs(results);
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        💼 Job Finder
      </h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p style={{ textAlign: "center" }}>Loading jobs...</p>}

      {jobs.length > 0
        ? jobs.map((job) => (
            <div
              key={job.job_id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              <h3>{job.job_title}</h3>
              <p>
                <strong>Company:</strong> {job.employer_name}
              </p>
              <p>
                <strong>Location:</strong> {job.job_city || "Remote"}
              </p>
              <a
                href={job.job_apply_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button style={{ marginTop: "10px", padding: "8px 16px" }}>
                  Apply Now
                </button>
              </a>
            </div>
          ))
        : !loading && (
            <p style={{ textAlign: "center" }}>No jobs found. Try a search.</p>
          )}
    </div>
  );
}

export default App;
