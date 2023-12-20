import Product from '../Models/product.model.js';

export default class ProductController {

    listAll = async () => {
        const result = await Product.findAll();
        return result;
    }

    getOne = async (id) => {
        const result = await Product.findByPk(id);
        return result;
    }
    
    create = async (data) => {
        const result = await Product.create(data);
        return result;
    }

    update = async (data) => {
        const result = await Product.update(data, { where: { id: data.id} });
        return result;
    }

    delete = async id => {
        const result = await Product.destroy({ where: { id: id } });
        return result;
    }

}