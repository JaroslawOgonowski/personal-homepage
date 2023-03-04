import { PortfolioIcon, SubTitle, Title, Wrapper } from "./styled";
import portfolioIcon from "./portfolioIcon.svg"
const Portfolio = () => {
    return (
        <Wrapper>
            <PortfolioIcon src={portfolioIcon} alt=""/>
            <Title>Portfolio</Title>
            <SubTitle>My recent projects</SubTitle>
        </Wrapper>
    )
};

export default Portfolio;
