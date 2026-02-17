import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
// import { FullCalendarModule } from "@fullcalendar/angular";
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { Calendar } from "../../calendar/calendar.model";
// import { CalendarOptions, DateSelectArg, EventApi, EventClickArg, EventInput } from "@fullcalendar/core";
import { CalendarService } from "../../calendar/calendar.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import listPlugin from "@fullcalendar/list";
// import interactionPlugin from "@fullcalendar/interaction";
import {DatePipe, formatDate} from "@angular/common";
// import frLocale from '@fullcalendar/core/locales/fr';
import { Activity } from "@core/models/Activity";
import { GlobalService } from "@core/service/global.service";

@Component({
  selector: 'app-dash-activite',
  imports: [
    // FullCalendarModule,
    ReactiveFormsModule,
    RouterLink,
    DatePipe
  ],
  templateUrl: './dash-activite.component.html',
  styleUrl: './dash-activite.component.scss'
})
export class DashActiviteComponent implements OnInit {
  // @ViewChild('calendar', { static: false }) calendar: Calendar | null; // Référence au calendrier
  @ViewChild('activityDetailsModal') activityDetailsModal!: TemplateRef<any>; // Référence au template de la modal
  selectedActivityDescription: string | undefined = '';
  selectedActivityTitle: string | undefined = '';
  selectedActivityCreaded: string | undefined = '';
  selectedActivitySalle: string | undefined = '';
  selectedActivityStart: Date | null | undefined;
  selectedActivityEnd: Date | null | undefined;
  // calendar: Calendar | null;
  activiteList: Activity[] = [];
  calendarForm: UntypedFormGroup;
  dialogTitle: string;
  filterOptions = 'All';
  calendarData: any;
  isEditClick?: boolean;

  // Propriétés pour les statistiques
  nombreActivitesMois: number = 0;
  nombreActivitesEncours: number = 0;
  nombreSallesUtilisees: number = 0;
  nombreParticipantsTotal: number = 0;

  // Propriétés pour le calendrier
  calendarEvents: any[] = [];
  calendarOptions: any = {};

  // calendarEvents: EventInput[] = []; // Initialisez comme un tableau vide
  // tempEvents?: EventInput[];
  @ViewChild('callAPIDialog', { static: false })
  callAPIDialog?: TemplateRef<any>;

  @ViewChild('eventWindow')
  eventWindow?: TemplateRef<any>;
  calCheck: any;

  constructor(
    private fb: UntypedFormBuilder,
    public calendarService: CalendarService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private globaleService: GlobalService,
  ) {
    this.dialogTitle = 'Add New Event';
    const blankObject = {} as Calendar;
    // this.calendar = new Calendar(blankObject);
    // this.calendarForm = this.createCalendarForm(this.calendar);
    this.calendarForm = this.fb.group({
      title: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      description: ['']
    });
  }

  public ngOnInit(): void {
    this.getAllActivite();
    this.calculateStatistics();
  }

  // Méthode pour calculer les statistiques
  calculateStatistics(): void {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    // Calculer les activités du mois
    this.nombreActivitesMois = this.activiteList.filter(activity => {
      const activityDate = new Date(activity.dateDebut || '');
      return activityDate.getMonth() === currentMonth && activityDate.getFullYear() === currentYear;
    }).length;

    // Calculer les activités en cours
    this.nombreActivitesEncours = this.activiteList.filter(activity => 
      activity.statut === 'EN_COURS'
    ).length;

    // Calculer les salles utilisées (unique)
    const sallesUtilisees = new Set(this.activiteList.map(activity => activity.salleId?.id).filter(salle => salle));
    this.nombreSallesUtilisees = sallesUtilisees.size;

    // Calculer le nombre total de participants (approximation)
    this.nombreParticipantsTotal = this.activiteList.reduce((total, activity) => {
      return total + (activity.objectifParticipation || 0);
    }, 0);
  }

  // handleEventClicke(clickInfo: EventClickArg) {
  //   this.selectedActivityDescription = clickInfo.event.extendedProps['description'];
  // }

  // handleEventClick(clickInfo: EventClickArg) {
  //   console.log('Détails de l\'activité cliquée :', clickInfo.event);
  //   this.selectedActivityTitle = clickInfo.event.title;
  //   this.selectedActivityCreaded = clickInfo.event.extendedProps['createdBy'];
  //    this.selectedActivitySalle = clickInfo.event.extendedProps['salleId'];
  //   this.selectedActivityStart = clickInfo.event.start;
  //   this.selectedActivityEnd = clickInfo.event.end;
  //   this.selectedActivityDescription = clickInfo.event.extendedProps['description'];
  //   this.modalService.open(this.activityDetailsModal, { ariaLabelledBy: 'modal-basic-title' });
  // }
addDays(date: Date | string, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
 
  return d;
}

  getAllActivite() {
    this.globaleService.get("activite").subscribe({
      next: (value: Activity[]) => {
        this.activiteList = value;
        console.log('Response Activite', this.activiteList);
        this.calculateStatistics(); // Calculer les statistiques après le chargement
        // this.transformActivitiesToEvents(); // Appeler la fonction de transformation
        // this.calendarOptions.events = this.calendarEvents; // Assigner les événements transformés aux options du calendrier
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  // transformActivitiesToEvents() {
  //   this.calendarEvents = this.activiteList.map(activity => {
  //     let color: string = 'gray'; // Couleur par défaut

  //     // Définir la couleur selon le statut (sensible à la casse)
  //     switch (activity.statut) {
  //       case 'En_Cours':
  //         color = 'green'; // Vert
  //         break;
  //       case 'En_Attente':
  //         color = 'blue'; // Bleu
  //         break;
  //       case 'Termine':
  //         color = 'red'; // Rouge
  //         break;
  //     }

      //     return {
  //       id: activity.id?.toString(),
  //       title: activity.nom,
  //       start: activity.dateDebut ,
  //       //end: activity.dateFin ,
  //       end: this.addDays(activity.dateFin!, 1),
  //       color: color,
        
        
  //       extendedProps: {
  //         description: activity.description ,        
  //         createdBy: activity.createdBy?.prenom + ' ' + activity.createdBy?.nom, // ou juste l'id si tu veux
  //         salleId: activity.salleId?.nom,
  // // Inclure la description ici
  //       } as any // Le type de extendedProps peut nécessiter un any pour la flexibilité
  //     } as EventInput;
  //   });
  // }

  // calendarOptions: CalendarOptions = {
  //   plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
  //   headerToolbar: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
  //   },
  //   initialView: 'dayGridMonth',
  //   weekends: true,
  //   editable: true,
  //   //PERMET DE SELECTIONNER UNE DATE DU CALENDRIER
  //   selectable: false,
  //   selectMirror: true,
  //   dayMaxEvents: true,
  //   select: this.handleDateSelect.bind(this),
  //   eventClick: this.handleEventClick.bind(this),
  //   eventsSet: this.handleEvents.bind(this),
  //   // Définissez la locale sur le français
  //   locale: frLocale,
  //   events: this.calendarEvents // Liez le tableau d'événements ici
  // };

  // handleDateSelect(selectInfo: DateSelectArg) {
  //   this.eventWindowCall(selectInfo, 'addEvent');
  // }
  eventWindowCall(row: any, type: string) {
    if (type === 'editEvent') {
      this.dialogTitle = row.event.title;
      this.isEditClick = true;
      this.calendarForm.setValue({
        id: row.event.id,
        title: row.event.title,
        category: row.event.groupId,
        startDate: formatDate(row.event.start, 'yyyy-MM-dd', 'fr') || '',
        endDate: formatDate(row.event.end, 'yyyy-MM-dd', 'fr') || '',
        details: row.event.extendedProps.details,
        userId: row.event.extendedProps.userId,
        salleId: row.event.extendedProps.salleId,
      });
    } else {
      this.calendarForm.reset();
      this.isEditClick = false;
    }

    this.modalService.open(this.eventWindow, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }

  saveEvent(form: UntypedFormGroup) {
    this.calendarData = form.value;
    this.calendarEvents = this.calendarEvents.concat({
      id: this.randomIDGenerate(5, 'abcdefghijklmnopqrstuvwxyz'),
      title: this.calendarData.title,
      start: this.calendarData.startDate,
      end: this.calendarData.endDate,
      className: this.getClassNameValue(this.calendarData.category),
      groupId: this.calendarData.category,
      details: this.calendarData.details,
      userId: this.calendarData.userId,
      salleId: this.calendarData.salleId,
    });
    this.calendarOptions.events = this.calendarEvents;
    this.calendarForm.reset();
    this.modalService.dismissAll();

    this.showNotification(
      'success',
      'Save Event Successfully...!!!',
      'top',
      'right'
    );
  }

  eventClick(form: UntypedFormGroup) {
    this.calendarData = form.value;

    this.calendarEvents.forEach((element, index) => {
      if (this.calendarData.id === element.id) {
        this.saveEditEvent(index, this.calendarData);
      }
    }, this);
  }

  saveEditEvent(eventIndex: number, calendarData: any) {
    const calendarEvents = this.calendarEvents.slice();
    const singleEvent = Object.assign({}, calendarEvents[eventIndex]);
    singleEvent.id = calendarData.id;
    singleEvent.title = calendarData.title;
    singleEvent.start = calendarData.startDate;
    singleEvent.end = calendarData.endDate;
    singleEvent.className = this.getClassNameValue(calendarData.category);
    singleEvent.groupId = calendarData.category;
    singleEvent['details'] = calendarData.details;
    singleEvent['userId'] = calendarData.userId;
    singleEvent['salleId'] = calendarData.salleId;
    calendarEvents[eventIndex] = singleEvent;
    this.calendarEvents = calendarEvents; // reassign the array

    this.calendarOptions.events = calendarEvents;

    this.calendarForm.reset();
    this.modalService.dismissAll();

    this.showNotification(
      'success',
      'Edit Event Successfully...!!!',
      'top',
      'right'
    );
  }


  filterEvent(element: any) {
    const list = this.calendarEvents.filter((x) =>
      element.map((y: any) => y).includes(x.groupId)
    );
    this.calendarOptions.events = list;
  }



  handleEvents(events: EventApi[]) {
    // this.currentEvents = events;
  }

  createCalendarForm(calendar: Calendar): UntypedFormGroup {
    return this.fb.group({
      id: [calendar.id],
      title: [calendar.title, [Validators.required]],
      category: [calendar.category],
      startDate: [calendar.startDate, [Validators.required]],
      endDate: [calendar.endDate, [Validators.required]],
      details: [calendar.details],
    });
  }

  getClassNameValue(category: string) {
    let className = '';

    if (category === 'work') {
      className = 'fc-event-success';
    } else if (category === 'personal') {
      className = 'fc-event-warning';
    } else if (category === 'important') {
      className = 'fc-event-primary';
    } else if (category === 'travel') {
      className = 'fc-event-danger';
    } else if (category === 'friends') {
      className = 'fc-event-info';
    }

    return className;
  }
  public randomIDGenerate(length: number, chars: string) {
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    }
    return result;
  }
  showNotification(
    eventType: string,
    message: string,
    ypos: string,
    xpos: string
  ) {
    if (eventType === 'success') {
      this.toastr.success(message, '', {
        positionClass: 'toast-' + ypos + '-' + xpos,
      });
    }
  }
}
