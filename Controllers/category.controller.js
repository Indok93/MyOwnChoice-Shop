import Category from '../Models/category.model.js';

export default class CategoryController {

    listAll = async () => {
        const result = await Category.findAll();
        return result;
    }

    getOne = async (id) => {
        const result = await Category.findByPk(id);
        return result;
    }
    
    create = async (data) => {
        const result = await Category.create(data);
        return result;
    }

    update = async (data) => {
        const result = await Category.update(data, { where: { id: data.id} });
        return result;
    }

    delete = async id => {
        const result = await Category.destroy({ where: { id: id } });
        return result;
    }

}