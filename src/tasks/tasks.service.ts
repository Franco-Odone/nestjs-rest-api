import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    getAllTasks() {
        return [{
            id: 1,
            title: 'firstTask',
            description: 'some task'
        }]
    }
    createTask() {}
    updateTask() {}
    deleteTask() {}
    
}