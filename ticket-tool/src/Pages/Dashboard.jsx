import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";
import "../Styles/Dashboard.css"; // We'll use custom CSS for SideNav width, etc.

const Dashboard = () => {
  const stats = [
    { title: "Total Tickets", value: "142", change: "↑ 12.5%", updated: "just now" },
    { title: "Pending Tickets", value: "24", change: "↓ 3.2%", updated: "just now" },
    { title: "Resolved Today", value: "89", change: "↑ 8.7%", updated: "1h ago" },
    { title: "Active Employees", value: "15", change: "↑ 2.1%", updated: "just now" }
  ];

  const recentTickets = [
    { id: "#TKT-0012", subject: "Printer not working", priority: "High", status: "Pending" },
    { id: "#TKT-0011", subject: "Email configuration issue", priority: "Medium", status: "Progress" },
    { id: "#TKT-0010", subject: "Software installation request", priority: "Low", status: "Resolved" },
    { id: "#TKT-0009", subject: "Network connectivity problem", priority: "High", status: "Pending" },
    { id: "#TKT-0008", subject: "Password reset request", priority: "Medium", status: "Resolved" }
  ];

  const locations = [
    "Saint Rancas", "Hizrovia", "Boomtown", "Holborn",
    "Cie Reewell", "Finsburg", "City of London",
    "London", "Southwich", "The Borough"
  ];

  return (
    <div className="dashboard-wrapper d-flex">
      <SideNav />
      <div className="dashboard-content flex-grow-1">
        <Container fluid className="p-4 pb-5">
          <div className="mb-4">
            <h2>Dashboard</h2>
            <p className="text-muted">Welcome back, here's what's happening today.</p>
          </div>

          <Row className="mb-4">
            {stats.map((stat, index) => (
              <Col key={index} xs={12} sm={6} md={3} className="mb-3">
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <h6 className="text-muted">{stat.title}</h6>
                    <div className="d-flex justify-content-between align-items-end">
                      <h3 className="mb-0">{stat.value}</h3>
                      <small className={stat.change.includes("↑") ? "text-success" : "text-danger"}>
                        {stat.change}
                      </small>
                    </div>
                    <small className="text-muted">Updated {stat.updated}</small>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row>
            <Col lg={8} className="mb-4">
              <Card className="mb-4 shadow-sm">
                <Card.Header className="bg-white">
                  <h5>Ticket Status Overview</h5>
                </Card.Header>
                <Card.Body>
                  <div className="text-center py-4" style={{ height: "250px", backgroundColor: "#f1f1f1" }}>
                    <p className="text-muted">Ticket Status Chart</p>
                  </div>
                </Card.Body>
              </Card>

              <Card className="shadow-sm">
                <Card.Header className="bg-white">
                  <h5>Recent Tickets</h5>
                </Card.Header>
                <Card.Body className="p-0">
                  <Table hover responsive className="mb-0">
                    <thead>
                      <tr>
                        <th>Ticket ID</th>
                        <th>Subject</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTickets.map((ticket, index) => (
                        <tr key={index}>
                          <td>{ticket.id}</td>
                          <td>{ticket.subject}</td>
                          <td>
                            <span className={`badge ${
                              ticket.priority === "High" ? "bg-danger" :
                              ticket.priority === "Medium" ? "bg-warning text-dark" : "bg-info text-dark"
                            }`}>
                              {ticket.priority}
                            </span>
                          </td>
                          <td>
                            <span className={`badge ${
                              ticket.status === "Resolved" ? "bg-success" :
                              ticket.status === "Progress" ? "bg-primary" : "bg-secondary"
                            }`}>
                              {ticket.status}
                            </span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-secondary">✉️</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="shadow-sm mb-4">
                <Card.Header className="bg-white">
                  <h5>Employee Location Tracking</h5>
                </Card.Header>
                <Card.Body style={{ height: "300px", overflowY: "auto" }}>
                  <div className="d-flex flex-wrap">
                    {locations.map((location, index) => (
                      <span key={index} className="badge bg-light text-dark me-2 mb-2">
                        {location}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 text-center text-muted small">
                    <p>© OpenStreetMap contributors</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
