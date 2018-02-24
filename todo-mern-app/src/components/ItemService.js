import axios from 'axios';

class ItemService{
  sendData(data){
    // console.log(data);
      axios.post('/items/add/post',{
        item: data
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });
  }

  //updating data
  updateData(data, id){
    axios.post('/items/update/'+id, {
      item: data
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  deleteData(id){
    axios.get('/items/delete/'+id)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

}

export default ItemService;
