import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import Resources from './pages/Resources';

// Clinic Types
import MedicalSpas from './pages/clinicTypes/MedicalSpas';
import AestheticClinics from './pages/clinicTypes/AestheticClinics';
import WeightLossClinics from './pages/clinicTypes/WeightLossClinics';
import WellnessCenters from './pages/clinicTypes/WellnessCenters';

// Services
import MedicalSupervision from './pages/services/MedicalSupervision';
import MedicalDirector from './pages/services/MedicalDirector';
import ChartReview from './pages/services/ChartReview';
import Training from './pages/services/Training';
import MedicalOversight from './pages/services/MedicalOversight';
import DeviceConsultations from './pages/services/DeviceConsultations';

// State Locations
import California from './pages/locations/California';
import Florida from './pages/locations/Florida';
import Texas from './pages/locations/Texas';
import Nevada from './pages/locations/Nevada';
import NewYork from './pages/locations/NewYork';
import Arizona from './pages/locations/Arizona';

// California Cities
import LosAngeles from './pages/locations/california/LosAngeles';
import SanFrancisco from './pages/locations/california/SanFrancisco';

// Florida Cities
import Miami from './pages/locations/florida/Miami';
import Orlando from './pages/locations/florida/Orlando';
import Tampa from './pages/locations/florida/Tampa';

// Texas Cities
import Houston from './pages/locations/texas/Houston';
import Dallas from './pages/locations/texas/Dallas';
import Austin from './pages/locations/texas/Austin';
import SanAntonio from './pages/locations/texas/SanAntonio';
import FortWorth from './pages/locations/texas/FortWorth';
import ElPaso from './pages/locations/texas/ElPaso';
import Plano from './pages/locations/texas/Plano';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/resources" element={<Resources />} />

          {/* Clinic Types Routes */}
          <Route path="/clinic-types/medical-spas" element={<MedicalSpas />} />
          <Route path="/clinic-types/aesthetic-clinics" element={<AestheticClinics />} />
          <Route path="/clinic-types/weight-loss" element={<WeightLossClinics />} />
          <Route path="/clinic-types/wellness-centers" element={<WellnessCenters />} />

          {/* Services Routes */}
          <Route path="/services/medical-supervision" element={<MedicalSupervision />} />
          <Route path="/services/medical-director" element={<MedicalDirector />} />
          <Route path="/services/chart-review" element={<ChartReview />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/medical-oversight" element={<MedicalOversight />} />
          <Route path="/services/device-consultations" element={<DeviceConsultations />} />

          {/* State Routes */}
          <Route path="/locations/california" element={<California />} />
          <Route path="/locations/florida" element={<Florida />} />
          <Route path="/locations/texas" element={<Texas />} />
          <Route path="/locations/nevada" element={<Nevada />} />
          <Route path="/locations/new-york" element={<NewYork />} />
          <Route path="/locations/arizona" element={<Arizona />} />

          {/* California City Routes */}
          <Route path="/locations/california/los-angeles" element={<LosAngeles />} />
          <Route path="/locations/california/san-francisco" element={<SanFrancisco />} />

          {/* Florida City Routes */}
          <Route path="/locations/florida/miami" element={<Miami />} />
          <Route path="/locations/florida/orlando" element={<Orlando />} />
          <Route path="/locations/florida/tampa" element={<Tampa />} />

          {/* Texas City Routes */}
          <Route path="/locations/texas/houston" element={<Houston />} />
          <Route path="/locations/texas/dallas" element={<Dallas />} />
          <Route path="/locations/texas/austin" element={<Austin />} />
          <Route path="/locations/texas/san-antonio" element={<SanAntonio />} />
          <Route path="/locations/texas/fort-worth" element={<FortWorth />} />
          <Route path="/locations/texas/el-paso" element={<ElPaso />} />
          <Route path="/locations/texas/plano" element={<Plano />} />

          {/* 404 Route */}
          <Route path="/404" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
