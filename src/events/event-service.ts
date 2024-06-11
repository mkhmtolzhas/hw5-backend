import { CreateEventDto } from './dtos/CreateEvent.dot';
import EventModel, { IEvent } from './models/Event';

class EventService {
    async getEventById(id: string): Promise<IEvent | null> {
        return await EventModel.findById(id).exec();
    }

    async getEventByCity(city: string): Promise<IEvent[]> {
        return await EventModel.find({ city: city }).exec();
    }

    async getEvents(page: number = 1, limit: number = 0, sort: string = 'rating'): Promise<IEvent[]> {
        let skip;
        if (limit !== 0 && page !== 1) {
            skip = (page - 1) * limit;
        }
        const sortOrder = sort === 'desc' ? -1 : 1;
        return await EventModel.find().skip(skip).limit(limit).sort({ rating: sortOrder }).exec();
    }

    async createEvent(createEventDto: CreateEventDto): Promise<IEvent> {
        const { name, description, date, location, duration, city, rating } = createEventDto;
        const newEvent = new EventModel({
            name,
            description,
            date: new Date(date),
            location,
            duration,
            city,
            rating
        });

        await newEvent.save();
        return newEvent;
    }
}

export default EventService;
