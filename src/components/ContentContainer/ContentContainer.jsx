import { connect } from 'react-redux';
import Content from './Content/Content';

const mapStateToProps = function(state) {
  return {
    userId: state.goToId
  };
}

const ContentContainer = connect(mapStateToProps)(Content);

export default ContentContainer;
