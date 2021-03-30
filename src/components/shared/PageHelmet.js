import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

function PageHelmet({ title }) {
  return (
    <Helmet>
      <title>{title}ㆍInstagram</title>
    </Helmet>
  );
}

PageHelmet.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHelmet;
