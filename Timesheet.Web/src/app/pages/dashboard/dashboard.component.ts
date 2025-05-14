import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { Schedule } from '../../Models/schedule.model';
import { ClockRecord } from '../../Models/clockRecord.model';

interface DisplaySchedule {
  hour: string;
  dom: string;
  seg: string;
  ter: string;
  qua: string;
  qui: string;
  sex: string;
  sab: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    TimelineModule,
    BadgeModule,
    DividerModule,
    TooltipModule,
    TableModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // Mock week schedules (add Sunday to Saturday)
  private weekSchedules: Schedule[] = [
    {
      userId: 1,
      date: new Date(),
      start: new Date(2025, 5, 14, 9, 0, 0),
      end: new Date(2025, 5, 14, 17, 0, 0),
    },
    {
      userId: 1,
      date: new Date(2025, 5, 13),
      start: new Date(2025, 5, 13, 9, 0, 0),
      end: new Date(2025, 5, 13, 17, 0, 0),
    },
  ];

  // Mock clocks for the week (starting Sunday)
  private weekClocks: ClockRecord[] = [
    // Monday
    {
      userId: 1,
      date: new Date(2025, 5, 12),
      clockTime: new Date(2025, 5, 12, 8, 55),
    },
    {
      userId: 1,
      date: new Date(2025, 5, 12),
      clockTime: new Date(2025, 5, 12, 12, 0),
    },
    {
      userId: 1,
      date: new Date(2025, 5, 12),
      clockTime: new Date(2025, 5, 12, 13, 0),
    },
    {
      userId: 1,
      date: new Date(2025, 5, 12),
      clockTime: new Date(2025, 5, 12, 18, 5),
    },
    // Tuesday
    {
      userId: 1,
      date: new Date(2025, 5, 13),
      clockTime: new Date(2025, 5, 13, 9, 2),
    },
    {
      userId: 1,
      date: new Date(2025, 5, 13),
      clockTime: new Date(2025, 5, 13, 12, 0),
    },
    {
      userId: 1,
      date: new Date(2025, 5, 13),
      clockTime: new Date(2025, 5, 13, 13, 0),
    },
    {
      userId: 1,
      date: new Date(2025, 5, 13),
      clockTime: new Date(2025, 5, 13, 18, 0),
    },
    {
      userId: 1,
      date: new Date(2025, 5, 13),
      clockTime: new Date(2025, 5, 14, 9, 2),
    },
    {
      userId: 1,
      date: new Date(2025, 5, 13),
      clockTime: new Date(2025, 5, 14, 12, 0),
    },
    {
      userId: 1,
      date: new Date(2025, 5, 13),
      clockTime: new Date(2025, 5, 14, 13, 0),
    },
    {
      userId: 1,
      date: new Date(2025, 5, 13),
      clockTime: new Date(2025, 5, 14, 18, 0),
    },
  ];

  currentTime = '';
  workHours = '8h 30m';
  scheduleTime = 'Sem horario por hoje!';
  scheduleData = [];
  timelinePairs = [];
  missingRecords = 2;
  notifications = 3;

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
    this.scheduleTime = this.calcScheduleTime();
  }

  updateTime() {
    this.currentTime = new Date().toLocaleString('pt-PT').replace(',', ' -');
  }

  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }

  calcScheduleTime() {
    const schedule = this.weekSchedules.find(
      (record) =>
        record.userId.toString() === sessionStorage.getItem('user') &&
        record.date.getDay() === new Date().getDay()
    );
    if (schedule) {
      return schedule
        ? `${schedule.start?.toLocaleTimeString(
            'pt-PT'
          )} - ${schedule.end?.toLocaleTimeString('pt-PT')}`
        : '';
    } else {
      return 'Sem horário por hoje!';
    }
  }

  calcWorkHours() {
    const schedule = this.weekSchedules.find(
      (record) =>
        record.userId.toString() === sessionStorage.getItem('user') &&
        record.date.getDay() === new Date().getDay()
    );
    if (schedule) {
      const start = schedule.start?.getTime();
      const end = schedule.end?.getTime();
      if (start && end) {
        const diff = end - start;
        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        return `${hours}h ${minutes}m`;
      }
    }
    return 'Sem horas realizadas!';
  }
}
