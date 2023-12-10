const express = require('express')
const mongoose = require("mongoose");
const Item = require("../model/Schema")

// Dashboard
const  getDashboard = async (req, res) => {
    try {
        const items = await Item.find();
        res.render('dashboard', { items });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// Add Item
const  addToDashboard = (req, res) => {
    res.render('add');
};

const  addToDashboard1 = async (req, res) => {
    const { name, image, summary } = req.body;

    try {
        await Item.create({ name, image, summary });
    } catch (error) {
        console.error(error);
    }

    res.redirect('/');
};

// Update Item
const  UpdateDashboard = async (req, res) => {
    const itemId = req.params.id;

    try {
        const item = await Item.findById(itemId);
        if (!item) {
            console.error('Item not found for update');
            res.redirect('/dashboard');
        } else {
            res.render('update', { item });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const  UpdateDashboard1 = async (req, res) => {
    const itemId = req.params.id;
    const { name, image, summary } = req.body;

    try {
        const updatedItem = await Item.findByIdAndUpdate(itemId, { name, image, summary }, { new: true });
        if (!updatedItem) {
            console.error('Item not found for update');
        }
    } catch (error) {
        console.error(error);
    }

    res.redirect('/');
};

// Delete Item
const  DeleteDashboard = async (req, res) => {
    const { id } = req.body;
    try {
        await Item.findByIdAndDelete(id);
    } catch (error) {
        console.error(error);
    }
    res.redirect('/');
};

module.exports = {
    getDashboard,
    addToDashboard,
    addToDashboard1,
    UpdateDashboard,
    UpdateDashboard1,
    DeleteDashboard
}