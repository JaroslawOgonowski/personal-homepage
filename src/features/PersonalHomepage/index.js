import Article from "../../common/Article";
import List from "../../common/Article/List";
import skills from "../../common/Article/List/skills";
import skillsToLearn from "../../common/Article/List/skillsToLearn";
import PageHeader from "../../common/PageHeader"
import { StyledPage } from "./styled";

const PersonalHomepage = () => {
    const skillArray = skills
    const skillToLearnArray = skillsToLearn
    return (
        <StyledPage>
            <PageHeader />
            <Article
                title="My skillset includes"
                content={List(skillArray)}>
            </Article>
            <Article
                title="What I want to learn next"
                content={List(skillToLearnArray)}>
            </Article>
        </StyledPage>
    )
};

export default PersonalHomepage;