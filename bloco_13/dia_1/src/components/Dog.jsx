import { Component } from 'react';

class Dog extends Component {
  constructor(props) {
    super(props);

    this.fetchDog = this.fetchDog.bind(this);
    this.showAlertBreed = this.showAlertBreed.bind(this);
    this.saveDogLocalStorage = this.saveDogLocalStorage.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      loading: true,
      dogImg: '',
      name: '',
    }
  }

  showAlertBreed() {
    const { dogImg } = this.state;
    if(dogImg) {
      const urlArray = dogImg.split('/');
      alert(urlArray[4]);
    }
  }

  async fetchDog() {
    this.setState({
      loading: true,
    }, async() => {
      const fetchURL = 'https://dog.ceo/api/breeds/image/random';
      const response = await fetch(fetchURL);
      const apiObj = await response.json();

      this.setState({
        dogImg: apiObj.message,
        loading: false,
      }, () => this.showAlertBreed())
    })
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  saveDogLocalStorage(e) {
    const { name, dogImg } = this.state;
    const storage = [ name, dogImg ];
    const storageString = JSON.stringify(storage);

    localStorage.setItem('dog', storageString)
  }

  componentDidMount() {
    if(localStorage.getItem('dog')) {
      const storage = JSON.parse(localStorage.getItem('dog'))
      this.setState({
        dogImg: storage[1],
        loading: false,
      }, () => this.showAlertBreed())
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.dogImg.includes('terrier') ? false : true;
  }

  render() {
    const { dogImg, loading } = this.state;

    return (
      <section className="dog-container">
        <div className="dog-img-div">
          {
            loading ? <p>Loading...</p> : <img src={dogImg} alt="Foto de Cachorro" />
          }
        </div>
        <div>
          <label htmlFor="nome">Nome: </label>
          <input type="text" id="nome" name="name" onChange={ this.handleChange } />
          <button onClick={ this.saveDogLocalStorage }>Salvar Doguíneo</button>
          <button onClick={ this.fetchDog }>Próximo Doguíneo</button>
        </div>
      </section>
    )
  }
}

export default Dog
