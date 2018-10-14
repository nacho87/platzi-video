import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related.js';
import ModalContainer from '../../widgets/containers/ModalContainer.js';
import Modal from '../../widgets/components/modal.js';
import HandleError from '../../error/containers/handle-error.js'

class Home extends Component {

  state = {
    modalVisible: false,
    handleError: false,
  }

  handleOpenModal = () => {
    this.setState({
      modalVisible: true,
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }

  // componentDidCatch(error, info) {
  //   this.setState({
  //     handleError: true,
  //   })
  // }

  render() {
    // if(this.state.handleError) {
    //   return <h1>Hay un error</h1>
    // }

    return(
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories categories={this.props.data.categories}
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <h1>Esto es portal</h1>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home
