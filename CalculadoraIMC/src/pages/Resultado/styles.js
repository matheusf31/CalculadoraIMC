import { StyleSheet, Dimensions } from 'react-native';

width = Dimensions.get('window').width;
height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  resultado: {
    marginBottom: 0.1 * height,
  },
  buttonVoltar: {
    height: 28,
    alignSelf: 'flex-start',
    backgroundColor: '#ade0ee',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    color: '#999',
    alignSelf: 'center',
    fontFamily: 'Century Gothic',
    padding: 20,
    textAlign: 'center',
    fontSize: 0.05 * height,
  },
  container: {
    flexDirection: 'row',
  },
  param: {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#999',
    marginLeft: 0.05 * width,
    borderRadius: 5,
  },
  descricao: {
    flex: 1,
    height: 0.06 * height,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginRight: 0.05 * width,
  },
  textTabela: {
    color: '#999',
    fontFamily: 'Century Gothic',
    fontSize: 0.04 * width,
    alignSelf: 'center',
  },
});

export default styles;
