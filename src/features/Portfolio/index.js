import { GHTiles, PortfolioIcon, SubTitle, Title, Wrapper } from "./styled";
import portfolioIcon from "./portfolioIcon.svg"
import GHTile from "./GHTile";
const Portfolio = () => {
    return (
        <Wrapper>
            <PortfolioIcon src={portfolioIcon} alt="" />
            <Title>Portfolio</Title>
            <SubTitle>My recent projects</SubTitle>
            <GHTiles>
                <GHTile></GHTile>
                <GHTile></GHTile>
                <GHTile></GHTile>
                <GHTile></GHTile>
            </GHTiles>
        </Wrapper>
    )
};

export default Portfolio;
