var human = {
	name: ['Elena', 'Maxim', 'Roman', 'Svetlana'],
	age: [30, 31, 19, 20],
	sex: ['female', 'male', 'male', 'female'],
	height: [160, 178, 184, 170],
	weight: [48, 80, 82, 60] 
}

var worker = {
	job: ['teacher', 'driver'],
	salary: [3000, 6000],
	toWork: function(){
        alert('Do not you see? I am working!');
	}
}
worker.__proto__ = human;

var student = {
	placeOfStudy: ['institute', 'college'],
	stipend: [800, 1000],
	toWatchSerials: function() {
		alert('I like serials.')
	}
}
student.__proto__ = human;

worker.toWork();
student.toWatchSerials();

for (var i = 0; i < worker.job.length; i++) {
	console.log(worker.name[i]);
    console.log('age: ', worker.age[i]);
    console.log('sex: ', worker.sex[i]);
    console.log('height: ', worker.height[i]);
    console.log('weight: ', worker.weight[i]);
    console.log('job: ', worker.job[i]);
    console.log('salary: ', worker.salary[i]);
    console.log('----------------');
};

for (var i = 2; i < human.name.length; i++) {
	console.log(student.name[i]);
    console.log('age: ', student.age[i]);
    console.log('sex: ', student.sex[i]);
    console.log('height: ', student.height[i]);
    console.log('weight: ', student.weight[i]);
    console.log('place of study: ', student.placeOfStudy[i - worker.job.length]);
    console.log('stipend: ', student.stipend[i - worker.job.length]);
    console.log('----------------');
};


