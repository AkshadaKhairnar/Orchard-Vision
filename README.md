# Orchard Vision 🍎

**A one-stop solution for orchard owners and the vendor community — empowering smarter decisions through drone data analytics and apple health monitoring.**

---

## 🌱 About the Project

**Orchard Vision** is a smart agri-tech platform that leverages drone imagery and machine learning to assist orchard owners in monitoring the health of their apple crops. With a focus on delivering actionable insights, the system provides an intuitive dashboard, tree-wise statistics, and visual analytics to help improve yield and optimize orchard management.

---

## 🎯 Key Features

- 📊 **Tree Health Monitoring**: Analyze drone-captured images to assess the health status of individual apple trees.
- 🛰️ **Drone Data Visualization**: View processed drone data overlaid on orchard maps.
- 📍 **Tree Mapping Interface**: A visual map interface where each tree is a clickable node with metadata.
- 📈 **Statistical Insights**: Get orchard-wide summaries including healthy vs. unhealthy trees, count per section, etc.
- 🌐 **Vendor Dashboard**: Tailored insights and data access for the vendor/supply chain ecosystem.

---

## 💻 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Framer Motion
- **Backend**: Firebase (Firestore, Authentication)
- **AI/ML**: Python, OpenCV, TensorFlow/Keras (for tree health classification)
- **Other Tools**: Git, Figma (UI/UX), Google Maps API

---

## 🧠 How It Works

1. **Drone Imagery Upload**: High-res images captured by drones are uploaded to the system.
2. **Processing Pipeline**: ML models detect and classify tree health conditions.
3. **Map Generation**: Each tree is mapped with a node on a digital orchard layout.
4. **Insights Delivery**: Orchard owners and vendors access real-time stats via dashboards.

---

## 📸 Screenshots

*(Insert screenshots or gif previews here)*  
Example:
![Tree Health Map](./screenshots/tree-map.png)

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- Firebase account
- Python 3.x for ML model (optional for frontend devs)

### Setup Instructions

```bash
git clone https://github.com/AkshadaKhairnar/Orchard-Vision.git
cd Orchard-Vision
npm install
npm start
