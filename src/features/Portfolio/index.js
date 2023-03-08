import { GHTiles, PortfolioIcon, SubTitle, Title, Wrapper } from "./styled";
import portfolioIcon from "./portfolioIcon.svg"
import GHTile from "./SuccessRepo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRepositories, selectRepositoriesStatus } from "./portfolioSlice";
import LoadingRepo from "./LoadingRepo";
import ErrorRepo from "./ErrorRepo";
import SuccesRepo from "./SuccessRepo";
const Portfolio = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch((fetchRepositories()));
    }, [dispatch]);

    const status = useSelector(selectRepositoriesStatus);
    return (
        <Wrapper>
            <PortfolioIcon src={portfolioIcon} alt="" />
            <Title>Portfolio</Title>
            <SubTitle>My recent projects</SubTitle>
            <>
                {status === "loading" ? (<SuccesRepo />) :
                    (status === "error") ? (<ErrorRepo />) :
                        (<LoadingRepo />)
                }
            </>
        </Wrapper>
    )
};

export default Portfolio;



<GHTiles>
    <GHTile></GHTile>
    <GHTile></GHTile>
    <GHTile></GHTile>
    <GHTile></GHTile>
</GHTiles>