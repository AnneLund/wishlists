import { useState } from "react";
import { StyledForm } from "../Contact/ContactForm.Styled";
import { Page } from "../../Components/Layout/Page";
import appService from "../../Appservices/App.service";
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Partials/Loading";
import { useLoginStore } from "./useLoginStore";

const NewUser = () => {
    const { setSuccessMessage, setErrorMessage } = useFlashMessageStore();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setLoggedIn, loggedIn } = useLoginStore((store) => ({
        setLoggedIn: store.setLoggedIn,
        loggedIn: store.loggedIn,
      }));

      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await appService.create_user(username, password);
            console.log("RESPONSE:", response);
            
    
            if (response.data.newId) {
                try {
                    const data = await appService.login(username, password);
                    console.log("DATA:", data)
    
                   alert("Bruger oprettet!")
                } catch (error) {
                    console.error("Error:", error);
                    setErrorMessage("Der opstod en fejl under login");
                }
            }
        } catch (error) {
            if (error.response.data === "Brugernavnet er allerede i brug")
            console.error("Der var en fejl ved oprettelse af brugeren", error);
            setErrorMessage("Brugernavnet findes allerede - prøv et andet.");
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <Page>
            {loading && <Loading />}
            <StyledForm onSubmit={handleSubmit}>
                <div>
                      <h1>Ny bruger</h1>
                <input 
                    type="text"
                    placeholder="Brugernavn"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                 <button type="submit">Opret bruger</button>
                </div>
            </StyledForm> 
        </Page>
    );
}

export default NewUser;