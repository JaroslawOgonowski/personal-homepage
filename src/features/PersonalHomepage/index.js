import Article from "../../common/Article";
import List from "../../common/Article/List";
import {skills} from "../../common/Article/List/skills";
import {skillsToLearn} from "../../common/Article/List/skillsToLearn";
import PageHeader from "../../common/PageHeader"

const PersonalHomepage = () => {
        return (
        <>
            <PageHeader />
            <Article
                title="My skillset includes 🛠️"
                content={List(skills)}>
            </Article>
            <Article
                title="What I want to learn next 🚀"
                content={List(skillsToLearn)}>
            </Article>
        </>
    );
};

export default PersonalHomepage;