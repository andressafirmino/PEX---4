import Desserts from "../../components/Desserts/Desserts";
import Drinks from "../../components/Drinks/Drinks";
import FinishButton from "../../components/FinishButton/FinishButton";
import Snacks from "../../components/Snacks/Snacks";
import { HomeContainer } from "./style";

export default function HomePage() {
    return (
        <HomeContainer>
            <Snacks />
            <Drinks />
            <Desserts />
            <FinishButton />
        </HomeContainer>
    );
}
