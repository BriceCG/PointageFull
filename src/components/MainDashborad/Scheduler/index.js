
import React, { Component } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
 
const scheduler = window.scheduler;
 
export default class Scheduler extends Component {

    initSchedulerEvents() {
        if (scheduler._$initialized) {
            
            return;
        }
        const onDataUpdated = this.props.onDataUpdated;
 
        scheduler.attachEvent('onEventAdded', (id, ev) => {
            if (onDataUpdated) {
                onDataUpdated('create', ev, id);
                console.log(ev,id)
            }
        });
 
        scheduler.attachEvent('onEventChanged', (id, ev) => {
            if (onDataUpdated) {
                onDataUpdated('update', ev, id);
                console.log(ev,id)

            }
        });
 
        scheduler.attachEvent('onEventDeleted', (id, ev) => {
            if (onDataUpdated) {
                onDataUpdated('delete', ev, id);
            }
        });
        scheduler._$initialized = true;
  }
    componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next'
        ];
 
        const { events } = this.props;
        scheduler.init(this.schedulerContainer, new Date(2020, 5, 10));
        scheduler.clearAll();
        scheduler.parse(events);
    }
    componentDidUpdate() {
        scheduler.render();
    }
 
    render() {
        return (


          <div 
          className="calendar_dash col-md-8 col-sm-12"
          ref={ (input) => { this.schedulerContainer = input } }
          style={ { width: '100%', height: '100%' } }
          >
       
          </div>
          
       );
    }
}