// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SkillLink {
    struct Job {
        uint256 id;
        string title;
        string description;
        uint256 salary;
        address employer;
        bool isActive;
        uint256 applicantCount; 
        uint256 timestamp;      
    }
    
    struct Application {
        uint256 jobId;
        address applicant;
        string resumeLink;
        uint256 timestamp; 
        bool isActive;
    }
    
    mapping(uint256 => Job) public jobs;
    mapping(uint256 => Application[]) public jobApplications;
    mapping(address => uint256[]) public employerJobs;
    mapping(address => uint256[]) public applicantApplications;
    
    uint256 public jobCounter;
    uint256 public applicationCounter;
    
    event JobPosted(
        uint256 indexed jobId,
        string title,
        address indexed employer,
        uint256 salary
    );
    event JobApplicationSubmitted(
        uint256 indexed jobId,
        address indexed applicant,
        string resumeLink
    );
    event JobStatusUpdated(
        uint256 indexed jobId,
        bool isActive
    );
    modifier onlyEmployer(uint256 _jobId) {
        require(jobs[_jobId].employer == msg.sender, "Only job employer can perform this action");
        _;
    }
    
    modifier jobExists(uint256 _jobId) {
        require(_jobId > 0 && _jobId <= jobCounter, "Job does not exist");
        _;
    }
    
    modifier jobIsActive(uint256 _jobId) {
        require(jobs[_jobId].isActive, "Job is not active");
        _;
    }
    
    function postJob(
        string memory _title,
        string memory _description,
        uint256 _salary
    ) external {
        require(bytes(_title).length > 0, "Job title cannot be empty");
        require(bytes(_description).length > 0, "Job description cannot be empty");
        require(_salary > 0, "Salary must be greater than 0");
        
        jobCounter++;
        jobs[jobCounter] = Job({
            id: jobCounter,
            title: _title,
            description: _description,
            salary: _salary,
            employer: msg.sender,
            isActive: true,
            applicantCount: 0, 
            timestamp: block.timestamp
        });
        
        employerJobs[msg.sender].push(jobCounter);
        
        emit JobPosted(jobCounter, _title, msg.sender, _salary);
    }
    
    function applyJob(uint256 _jobId, string memory _resumeLink) 
        external 
        jobExists(_jobId) 
        jobIsActive(_jobId) 
    {
        require(bytes(_resumeLink).length > 0, "Resume link cannot be empty");
        require(jobs[_jobId].employer != msg.sender, "Employer cannot apply to their own job");
        // Check if user already applied
        Application[] storage applications = jobApplications[_jobId];
        for (uint i = 0; i < applications.length; i++) {
            require(applications[i].applicant != msg.sender, "Already applied to this job");
        }
        
        jobs[_jobId].applicantCount++;
        
        applicationCounter++;
        Application memory newApplication = Application({
            jobId: _jobId,
            applicant: msg.sender,
            resumeLink: _resumeLink,
            timestamp: block.timestamp,
            isActive: true
        });
        jobApplications[_jobId].push(newApplication);
        applicantApplications[msg.sender].push(_jobId);
        
        emit JobApplicationSubmitted(_jobId, msg.sender, _resumeLink);
    }
    
    function getAllJobs() external view returns (Job[] memory) {
        Job[] memory allJobs = new Job[](jobCounter);
        for (uint256 i = 1; i <= jobCounter; i++) {
            allJobs[i-1] = jobs[i];
        }
        return allJobs;
    }
    
    function getActiveJobs() external view returns (Job[] memory) {
        uint256 activeJobCount = 0;
        // Count active jobs
        for (uint256 i = 1; i <= jobCounter; i++) {
            if (jobs[i].isActive) {
                activeJobCount++;
            }
        }
        
        Job[] memory activeJobs = new Job[](activeJobCount);
        uint256 currentIndex = 0;
        
        for (uint256 i = 1; i <= jobCounter; i++) {
            if (jobs[i].isActive) {
                activeJobs[currentIndex] = jobs[i];
                currentIndex++;
            }
        }
        
        return activeJobs;
    }
    
    function getJob(uint256 _jobId) 
        external 
        view 
        jobExists(_jobId) 
        returns (Job memory) 
    {
        return jobs[_jobId];
    }
    
    function getJobApplications(uint256 _jobId) 
        external 
        view 
        jobExists(_jobId) 
        onlyEmployer(_jobId)
        returns (Application[] memory) 
    {
        return jobApplications[_jobId];
    }
    
    function getEmployerJobs(address _employer) 
        external 
        view 
        returns (uint256[] memory) 
    {
        return employerJobs[_employer];
    }
    
    function getApplicantApplications(address _applicant) 
        external 
        view 
        returns (uint256[] memory) 
    {
        return applicantApplications[_applicant];
    }
    
    function toggleJobStatus(uint256 _jobId) 
        external 
        jobExists(_jobId) 
        onlyEmployer(_jobId) 
    {
        jobs[_jobId].isActive = !jobs[_jobId].isActive;
        emit JobStatusUpdated(_jobId, jobs[_jobId].isActive);
    }
    
    function getJobApplicationCount(uint256 _jobId) 
        external 
        view 
        jobExists(_jobId) 
        returns (uint256) 
    {
        return jobApplications[_jobId].length;
    }
    
    function getTotalJobs() external view returns (uint256) {
        return jobCounter;
    }
    
    function getTotalApplications() external view returns (uint256) {
        return applicationCounter;
    }
}