import { PortfolioIcon, SubTitle, Title, Wrapper } from "./styled";
import portfolioIcon from "./portfolioIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "./portfolioSlice";
import { useEffect } from "react";
import { Content } from "./Content";

const Portfolio = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch((fetchRepositories()));
    }, [dispatch]);

    return (

        <Wrapper>
            <PortfolioIcon src={portfolioIcon} alt="" />
            <Title>Portfolio</Title>
            <SubTitle>My recent projects</SubTitle>
            <Content
                state={status}
                repositories={repositories}
            />
        </Wrapper>
    );
};

export default Portfolio;



