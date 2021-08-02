
import Dashboard from "views/Dashboard.js";
import Users from "views/Users.js";
import Complaints from "views/Complaints.js";
import EmergencyComplaint from "views/EmergencyComplaint.js";
import complaintStatus from "views/complaintStatus.js";
import Feedback from "views/Feedback.js";
import PoliceOfficer from "views/PoliceOfficer.js";


const dashboardRoutes = [
 
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Users",
    icon: "fas fa-users",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Complaints",
    icon: "nc-icon nc-notes",
    component: Complaints,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Emergency Complaint",
    icon: "nc-icon nc-paper-2",
    component: EmergencyComplaint,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Complaint Status",
    icon: "nc-icon nc-atom",
    component: complaintStatus,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Feedback",
    icon: "fas fa-comment-alt",
    component: Feedback,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Police Officers",
    icon: "fas fa-user-secret",
    component: PoliceOfficer,
    layout: "/admin",
  },
];

export default dashboardRoutes;
