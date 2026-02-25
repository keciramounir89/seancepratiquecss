export const mockStudents = [
  { id: 1, name: 'Yasmine Boudiaf', grade: '10th', class: '10-A', status: 'active', email: 'y.boudiaf@student.school.dz', phone: '0555-123-456', enrolled: '2023-09-01', fees: 'paid' },
  { id: 2, name: 'Karim Messaoud', grade: '8th', class: '8-B', status: 'active', email: 'k.messaoud@student.school.dz', phone: '0555-234-567', enrolled: '2023-09-01', fees: 'paid' },
  { id: 3, name: 'Lina Cherif', grade: '5th', class: '5-A', status: 'active', email: 'l.cherif@student.school.dz', phone: '0555-345-678', enrolled: '2024-01-15', fees: 'pending' },
  { id: 4, name: 'Omar Benali', grade: '12th', class: '12-C', status: 'active', email: 'o.benali@student.school.dz', phone: '0555-456-789', enrolled: '2023-09-01', fees: 'paid' },
  { id: 5, name: 'Amira Tlemcani', grade: '3rd', class: '3-B', status: 'active', email: 'a.tlemcani@student.school.dz', phone: '0555-567-890', enrolled: '2024-09-01', fees: 'paid' },
  { id: 6, name: 'Youcef Brahimi', grade: '11th', class: '11-A', status: 'inactive', email: 'y.brahimi@student.school.dz', phone: '0555-678-901', enrolled: '2023-09-01', fees: 'overdue' },
  { id: 7, name: 'Sara Hamdi', grade: '7th', class: '7-A', status: 'active', email: 's.hamdi@student.school.dz', phone: '0555-789-012', enrolled: '2024-09-01', fees: 'paid' },
  { id: 8, name: 'Riad Lahlou', grade: '9th', class: '9-B', status: 'active', email: 'r.lahlou@student.school.dz', phone: '0555-890-123', enrolled: '2023-09-01', fees: 'paid' },
  { id: 9, name: 'Nadia Bekkouche', grade: '6th', class: '6-A', status: 'active', email: 'n.bekkouche@student.school.dz', phone: '0555-901-234', enrolled: '2024-09-01', fees: 'pending' },
  { id: 10, name: 'Amine Khelil', grade: '4th', class: '4-B', status: 'active', email: 'a.khelil@student.school.dz', phone: '0555-012-345', enrolled: '2024-01-15', fees: 'paid' },
  { id: 11, name: 'Dounia Ferhat', grade: '2nd', class: '2-A', status: 'active', email: 'd.ferhat@student.school.dz', phone: '0555-111-222', enrolled: '2025-09-01', fees: 'paid' },
  { id: 12, name: 'Walid Aissaoui', grade: '1st', class: '1-B', status: 'active', email: 'w.aissaoui@student.school.dz', phone: '0555-222-333', enrolled: '2025-09-01', fees: 'paid' },
];

export const mockTeachers = [
  { id: 1, name: 'Dr. Fatima Zahra Boukhalfa', subject: 'Mathematics', classes: ['10-A', '11-A', '12-C'], status: 'active', email: 'f.boukhalfa@school.dz', phone: '0555-100-001', experience: '12 years' },
  { id: 2, name: 'Prof. Salim Hadjadj', subject: 'Physics', classes: ['9-B', '10-A', '11-A'], status: 'active', email: 's.hadjadj@school.dz', phone: '0555-100-002', experience: '8 years' },
  { id: 3, name: 'Mme. Houria Benseghir', subject: 'French Literature', classes: ['6-A', '7-A', '8-B'], status: 'active', email: 'h.benseghir@school.dz', phone: '0555-100-003', experience: '15 years' },
  { id: 4, name: 'Mr. Tariq Ouali', subject: 'History & Geography', classes: ['5-A', '6-A', '7-A'], status: 'active', email: 't.ouali@school.dz', phone: '0555-100-004', experience: '10 years' },
  { id: 5, name: 'Ms. Karima Belhadj', subject: 'English Language', classes: ['8-B', '9-B', '10-A'], status: 'active', email: 'k.belhadj@school.dz', phone: '0555-100-005', experience: '7 years' },
  { id: 6, name: 'Dr. Nasser Chikhi', subject: 'Biology', classes: ['11-A', '12-C'], status: 'inactive', email: 'n.chikhi@school.dz', phone: '0555-100-006', experience: '20 years' },
  { id: 7, name: 'Mme. Zineb Rahmani', subject: 'Arabic Literature', classes: ['1-B', '2-A', '3-B'], status: 'active', email: 'z.rahmani@school.dz', phone: '0555-100-007', experience: '9 years' },
  { id: 8, name: 'Mr. Bilal Mansouri', subject: 'Physical Education', classes: ['4-B', '5-A', '6-A', '7-A'], status: 'active', email: 'b.mansouri@school.dz', phone: '0555-100-008', experience: '5 years' },
];

export const mockClasses = [
  { id: 1, name: '1-B', grade: '1st', teacher: 'Mme. Zineb Rahmani', students: 22, room: '101', schedule: 'Sun-Thu 8:00-14:00' },
  { id: 2, name: '2-A', grade: '2nd', teacher: 'Mme. Zineb Rahmani', students: 25, room: '102', schedule: 'Sun-Thu 8:00-14:00' },
  { id: 3, name: '3-B', grade: '3rd', teacher: 'Mme. Zineb Rahmani', students: 24, room: '103', schedule: 'Sun-Thu 8:00-14:30' },
  { id: 4, name: '4-B', grade: '4th', teacher: 'Mr. Tariq Ouali', students: 28, room: '201', schedule: 'Sun-Thu 8:00-14:30' },
  { id: 5, name: '5-A', grade: '5th', teacher: 'Mr. Tariq Ouali', students: 30, room: '202', schedule: 'Sun-Thu 8:00-15:00' },
  { id: 6, name: '6-A', grade: '6th', teacher: 'Mr. Tariq Ouali', students: 29, room: '203', schedule: 'Sun-Thu 8:00-15:00' },
  { id: 7, name: '7-A', grade: '7th', teacher: 'Mme. Houria Benseghir', students: 27, room: '301', schedule: 'Sun-Thu 8:00-15:00' },
  { id: 8, name: '8-B', grade: '8th', teacher: 'Mme. Houria Benseghir', students: 26, room: '302', schedule: 'Sun-Thu 8:00-15:30' },
  { id: 9, name: '9-B', grade: '9th', teacher: 'Prof. Salim Hadjadj', students: 25, room: '303', schedule: 'Sun-Thu 8:00-15:30' },
  { id: 10, name: '10-A', grade: '10th', teacher: 'Dr. Fatima Zahra Boukhalfa', students: 28, room: '401', schedule: 'Sun-Thu 8:00-16:00' },
  { id: 11, name: '11-A', grade: '11th', teacher: 'Dr. Fatima Zahra Boukhalfa', students: 24, room: '402', schedule: 'Sun-Thu 8:00-16:00' },
  { id: 12, name: '12-C', grade: '12th', teacher: 'Dr. Fatima Zahra Boukhalfa', students: 20, room: '403', schedule: 'Sun-Thu 8:00-16:00' },
];

export const mockAnnouncements = [
  { id: 1, title: 'End of Term Exams Schedule', content: 'The end of term exams will be held from March 15-25, 2026. Students are advised to prepare accordingly.', date: '2026-02-20', priority: 'high' },
  { id: 2, title: 'Parent-Teacher Meeting', content: 'Annual parent-teacher meeting is scheduled for March 5, 2026 from 9:00 AM to 12:00 PM.', date: '2026-02-18', priority: 'medium' },
  { id: 3, title: 'School Trip to Museum', content: 'Grade 5-8 students will visit the National Museum on February 28. Permission slips must be submitted by Feb 24.', date: '2026-02-15', priority: 'low' },
  { id: 4, title: 'Fee Payment Reminder', content: '2nd trimester fees are due by March 1, 2026. Please ensure timely payment to avoid late charges.', date: '2026-02-10', priority: 'high' },
];

export const mockEvents = [
  { id: 1, title: 'National Science Fair', date: '2026-03-10', type: 'academic' },
  { id: 2, title: 'Sports Day', date: '2026-03-15', type: 'sports' },
  { id: 3, title: 'Art Exhibition', date: '2026-03-22', type: 'cultural' },
  { id: 4, title: 'Graduation Ceremony', date: '2026-06-20', type: 'ceremony' },
  { id: 5, title: 'Summer Camp Registration', date: '2026-04-01', type: 'activity' },
];

export const mockStats = {
  totalStudents: 308,
  totalTeachers: 8,
  totalClasses: 12,
  monthlyRevenue: 2850000,
  attendanceRate: 94.5,
  passRate: 87.3,
};

export const mockAttendance = [
  { month: 'Sep', rate: 96 },
  { month: 'Oct', rate: 94 },
  { month: 'Nov', rate: 92 },
  { month: 'Dec', rate: 89 },
  { month: 'Jan', rate: 95 },
  { month: 'Feb', rate: 94 },
];

export const mockPayments = [
  { id: 1, student: 'Yasmine Boudiaf', amount: 65000, date: '2026-01-05', status: 'paid', term: 'Term 2' },
  { id: 2, student: 'Karim Messaoud', amount: 55000, date: '2026-01-07', status: 'paid', term: 'Term 2' },
  { id: 3, student: 'Lina Cherif', amount: 45000, date: null, status: 'pending', term: 'Term 2' },
  { id: 4, student: 'Omar Benali', amount: 65000, date: '2026-01-03', status: 'paid', term: 'Term 2' },
  { id: 5, student: 'Youcef Brahimi', amount: 65000, date: null, status: 'overdue', term: 'Term 2' },
];
