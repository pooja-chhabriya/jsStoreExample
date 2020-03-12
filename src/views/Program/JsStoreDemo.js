import React, { Component } from 'react';
import * as JsStore from 'jsstore';
/* eslint import/no-webpack-loader-syntax: off */
import * as JsStoreWorker from 'file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js';

export default class JsStoreDemo extends Component {
  
    
    initDb() {
        // const workerPath = '../Program/jsstore.worker.js';
        var jsstoreCon = new JsStore.Connection(new Worker(JsStoreWorker));
        var isDbCreated =jsstoreCon.initDb(this.getDbSchema());
        if (isDbCreated) {
            console.log('db created');
        }
        else {
            console.log('db opened');
        }
    }
    
    getDbSchema() {
        var table = {
            name: 'Student',
            columns: {
                id: {
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    notNull: true,
                    dataType: 'string'
                },
                gender: {
                    dataType: 'string',
                    default: 'male'
                },
                country: {
                    notNull: true,
                    dataType: 'string'
                },
                city: {
                    dataType: 'string',
                    notNull: true
                }
            }
        }
    
        var db = {
            name: 'My-Db',
            tables: [table]
        }
        return db;
    }
    


    componentDidMount() {
        console.log("in component did mount")
        this.initDb();
    }

    render() {
        return (
            <div>
               <p> Data inserted in db</p>
            </div>
        )
    }

}