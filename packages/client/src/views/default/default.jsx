// external dependencies
import React, { Component, createRef } from 'react';

// internal dependencies
import { Iterator } from '../../utils/index';

// components
import {
  Card,
  Footer,
  Logo,
  Header,
  Navigation,
  NavigationItem,
  Profile,
  Section,
  SocialIcon,
} from '../../components/index';

// stylesheets
import './default.scss';

class Default extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: false,
    };

    this.sections = {
      profile: {
        title: 'Profile',
        reference: createRef(),
      },
      blogs: {
        title: 'Blogs',
        reference: createRef(),
      },
      projects: {
        title: 'Projects',
        reference: createRef(),
      },
    };
  }

  componentDidMount() {
    window.onresize = this.checkMobile.bind(this);
    this.checkMobile();
  }

  checkMobile() {
    const { mobile } = this.state;
    if (window.innerWidth <= 480 && !mobile) {
      this.setState(() => ({
        mobile: true,
      }));
    } else if (window.innerWidth > 480 && mobile) {
      this.setState(() => ({
        mobile: false,
      }));
    }
  }

  render() {
    const { mobile } = this.state;
    const { sections } = this;
    const { blogs, profile, projects } = sections;
    const tabIndex = new Iterator();

    const navigationItemComponents = Object.keys(sections).map((key) => (
      <NavigationItem
        key={key}
        tabIndex={tabIndex.previous()}
        target={sections[key].reference}
        text={sections[key].title}
      />
    ));

    return (
      <>
        <Header>
          <Logo firstName="Timothy" lastName="Scheuering" mobile={mobile} />
          <Navigation mobile={mobile}>
            {navigationItemComponents}
          </Navigation>
        </Header>
        <Section
          key="profile"
          reference={profile.reference}
        >
          <Profile
            image="http://timothy.alboe.info/img/avatar.jpg"
            title="Full-Stack Software Engineer"
            blurb="Currently Employed by Cisco Systems"
          >
            <SocialIcon
              hoverable
              image="https://image.flaticon.com/icons/svg/61/61109.svg"
              link="https://www.linkedin.com/in/timothy-scheuering"
              tabIndex={tabIndex.previous()}
              title="LinkedIn"
            />
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
          </Profile>
        </Section>
        <Section
          key="blogs"
          offColor
          reference={blogs.reference}
          title={blogs.title}
        >
          <Card
            content="this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long content."
            image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
            subtitle="this is a very long subtitle text to force dots"
            tabIndex={tabIndex.previous()}
            title="this is a very long title text to force dots"
          >
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
          </Card>
          <Card
            content="this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long content."
            image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
            subtitle="this is a very long subtitle text to force dots"
            tabIndex={tabIndex.previous()}
            title="this is a very long title text to force dots"
          >
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
          </Card>
          <Card
            content="this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long content."
            image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
            subtitle="this is a very long subtitle text to force dots"
            tabIndex={tabIndex.previous()}
            title="this is a very long title text to force dots"
          >
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
          </Card>
          <Card
            content="this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long content."
            image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
            subtitle="this is a very long subtitle text to force dots"
            tabIndex={tabIndex.previous()}
            title="this is a very long title text to force dots"
          >
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
          </Card>
          <Card
            content="this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long content."
            image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
            subtitle="this is a very long subtitle text to force dots"
            tabIndex={tabIndex.previous()}
            title="this is a very long title text to force dots"
          >
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
          </Card>
          <Card
            content="this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long content."
            image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
            subtitle="this is a very long subtitle text to force dots"
            tabIndex={tabIndex.previous()}
            title="this is a very long title text to force dots"
          >
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
          </Card>
          <Card
            content="this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long content."
            image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
            subtitle="this is a very long subtitle text to force dots"
            tabIndex={tabIndex.previous()}
            title="this is a very long title text to force dots"
          >
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
          </Card>
          <Card
            content="this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long content."
            image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
            subtitle="this is a very long subtitle text to force dots"
            tabIndex={tabIndex.previous()}
            title="this is a very long title text to force dots"
          >
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
          </Card>
          <Card
            content="this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long content."
            image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
            subtitle="this is a very long subtitle text to force dots"
            tabIndex={tabIndex.previous()}
            title="this is a very long title text to force dots"
          >
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
          </Card>
          <Card
            offColor
            image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
            tabIndex={tabIndex.previous()}
            title="this is a very long title text to force dots"
          >
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
            <SocialIcon
              hoverable
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              link="https://github.com/InteractiveTimmy"
              tabIndex={tabIndex.previous()}
              title="GitHub"
            />
          </Card>
        </Section>
        <Section
          key="projects"
          reference={projects.reference}
          title={projects.title}
        />
        <Footer />
      </>
    );
  }
}

export default Default;
