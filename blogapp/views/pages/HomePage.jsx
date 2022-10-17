const React = require("react");
const NavBar = require("../components/Navbar");
const Footer = require("../components/Footer");
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/app.css" />
        </head>
        <NavBar />
        <h1>Welcome to My Blog</h1>
        <p><i class="bi bi-app-indicator"></i> Incididunt same lorem ea. Farm-to-table austin cardigan pour-over lo-fi drinking vinegar vice. Selvage slow-carb photo booth ea gluten-free subway tile twee chia.</p> <p><i class="bi bi-app-indicator"></i>Polaroid cupidatat freegan locavore bespoke.</p>
        <blockquote class="imgur-embed-pub" lang="en" data-id="a/VmvtY"  ><a href="//imgur.com/a/VmvtY">caught my dog trying to blog about his vegan diet this morning</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
              <p> Poutine kombucha XOXO viral farm-to-table adaptogen. Waistcoat portland chambray green juice. Distillery umami kale chips messenger bag mlkshk. Coloring book tbh vegan fanny pack lomo health goth. Yes plz DIY chia, ennui kinfolk occupy kickstarter leggings iPhone mukbang.

Stumptown Brooklyn photo booth shoreditch actually, thundercats man braid.</p><p> <i class="bi bi-app-indicator"></i> Ascot church-key fashion axe coloring book portland williamsburg. Actually knausgaard bespoke messenger bag shaman lumbersexual iceland.

Dummy text? More like dummy thicc text, amirite?</p>  
<Footer />
</div>
    );
  }

}
module.exports = HomePage;
