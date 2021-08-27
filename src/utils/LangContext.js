import React, { useState, useContext, useEffect } from "react";



function LangProvider({children}) {

    const value = useContext(MyContext);
    const languages = {
        english:{
            Home: "Home",
            Login: "Log in",
            Logout: "Log out",
            Signup: "Sign up",
            Details: "Details",
            Create: "Create",
            Edit: "Edit",
            Patients: "Patients",
            MyPatients: "My Patients",
            Calendar: "Calendar",
            Name: "Name",
            Surname: "Surname",
            Email: "Email",
            Phone: "Phone number",
            Address: "Address",
            City: "City",
            State: "State",
            Postal: "Postal code",
            ContactPerson: "Contact Person",
            ProfessionalAssistance: "Professional Assistance",
            Professional: "Professional",
            selectprofessional: "select professional",
            session: "session",
            ListofPatients: "List of Patients",
            New: "New",
            Historynumber: "History number",
            Operation: "Operation",
        },

        spanish: {
            Home: "Página Principal",
            Login: "Iniciar sessión",
            Logout: "Desconectarse",
            Signup: "Inscribirse",
            Details: "Información",
            Create: "Crear",
            Edit: "Editar",
            Patients: "Pacientes",
            MyPatients: "Mis Pacientes",
            Calendar: "Calendario",
            Name: "Nombre",
            Surname: "Apellidos",
            Email: "Correo electrónico",
            Phone: "Teléfono",
            Address: "Dirección",
            City: "Ciudad",
            State: "Provincia",
            Postal: "Código Postal",
            ContactPerson: "Persona de contacto",
            ProfessionalAssistance: "Asistencia Profesional",
            Professional: "Profesional",
            selectprofessional: "selecciona profesional",
            session: "sesión",
            ListofPatients: "Listado de Pacientes",
            New: "Nuevo",
            Historynumber: "Nº Historia",
            Operation: "Acción",
        },

        french: {
            Home: "Home",
            Login: "Connexion",
            Logout: "Se déconnecter",
            Signup: "S'inscrire",
            Details: "Informations",
            Create: "Créer",
            Edit: "Modifier",
            Patients: "Patients",
            MyPatients: "Mes Patientes",
            Calendar: "Calendrier",
            Name: "Nom",
            Surname: "Nom de famille",
            Email: "Courriel",
            Phone: "Téléphone",
            Address: "Adresse",
            City: "Ville",
            State: "Provence",
            Postal: "Zip / Code Postal",
            ContactPerson: "Personne de contacte",
            ProfessionalAssistance: "Assistance Professionnelle",
            Professional: "Professionnel",
            selectprofessional: "selectionne professionnel",
            session: "séance",
            ListofPatients: "Liste de Patientes",
            New: "Nouveau",
            Historynumber: "Nº d'histoire",
            Operation: "Action",
        },

        deutch: {
            Home: "Home",
            Login:"Zie ontkoppelaar",
            Logout: "Uitloggen",
            Signup: "Inschrijven",
            Details: "Información",
            Create: "Creëren",
            Edit: "Bewerken",
            Patients: "Patiënten",
            MyPatients: "Mijn patiënten",
            Calendar: "Kalender",
            Name: "Naam",
            Surname: "Achternaam",
            Email: "E-mail",
            Phone: "Telefoon",
            Address: "Adres",
            City: "Stad",
            State: "Provincie",
            Postal: "Postcode",
            ContactPerson: "Contact Persoon",
            ProfessionalAssistance: "Professionele hulp",
            Professional: "Professioneel",
            selectprofessional: "kiezen professioneel",
            session: "sessie",
            ListofPatients: "Patiëntenlijst",
            New: "Nieuw",
            Historynumber: "Geschiedenis nummer",
            Operation: "Actie",
        },
    };

    export const LangContext = React.createContext(languages.english);

    return (
        <LangContext.Provider value={themes.dark}>
        {children}
        </LangContext.Provider>
    );
}

export default LangProvider;
