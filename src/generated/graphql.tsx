import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type Course = {
  __typename?: 'Course';
  code: Scalars['ID'];
  coursePrerequisites: Array<Course>;
  credits: Scalars['Int'];
  curriculums: Array<Curriculum>;
  groups: Array<RepresentativeGroup>;
  id?: Maybe<Scalars['Int']>;
  isRequired: Scalars['Boolean'];
  level: Scalars['Int'];
  name: Scalars['String'];
  practiceHours: Scalars['Int'];
  prerequisitesOf: Array<Course>;
  theoricHours: Scalars['Int'];
  totalHours: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
};

export type Curriculum = {
  __typename?: 'Curriculum';
  courses: Array<Course>;
  id: Scalars['ID'];
  school: School;
  schoolId: Scalars['Int'];
  users: Array<User>;
  year: Scalars['String'];
};

export type Enrollment = {
  __typename?: 'Enrollment';
  creditsSum: Scalars['Int'];
  enrolledGroups: Array<EnrollmentDetail>;
  id: Scalars['ID'];
  isCurrent: Scalars['Boolean'];
  score?: Maybe<Scalars['Float']>;
  semester: Semester;
  semesterId: Scalars['Int'];
  type: Scalars['String'];
  userId: Scalars['Int'];
};

export type EnrollmentDetail = {
  __typename?: 'EnrollmentDetail';
  condition: Scalars['String'];
  createdAt: Scalars['DateTime'];
  enrollment: Enrollment;
  enrollmentId: Scalars['Int'];
  finalScore: Scalars['Float'];
  group: Group;
  groupId: Scalars['Int'];
  id: Scalars['ID'];
  numberTimes: Scalars['Int'];
  state: Scalars['Boolean'];
  syllabusConfirmed?: Maybe<Scalars['Boolean']>;
  syllabusConfirmedAt?: Maybe<Scalars['DateTime']>;
  unities: Array<UnityActivity>;
  updatedAt: Scalars['DateTime'];
};

export type EvaluationMethod = {
  __typename?: 'EvaluationMethod';
  id: Scalars['ID'];
  name: Scalars['String'];
  tasks: Array<Task>;
};

export type Group = {
  __typename?: 'Group';
  enrollmentDetail: EnrollmentDetail;
  groupInfo: RepresentativeGroup;
  id: Scalars['ID'];
  representativeGroupId: Scalars['Int'];
  state: Scalars['Boolean'];
};

export type Indicator = {
  __typename?: 'Indicator';
  description: Scalars['String'];
  id: Scalars['ID'];
  tasks: Array<Task>;
  unity: Unity;
  unityId: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signup: AuthPayload;
};


export type MutationSignupArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  course?: Maybe<Course>;
  courses: Array<Course>;
  currentEnrollment?: Maybe<Enrollment>;
  currentSemester: Semester;
  enrollment?: Maybe<Enrollment>;
  enrollmentDetail?: Maybe<EnrollmentDetail>;
  enrollmentDetails: Array<EnrollmentDetail>;
  enrollments: Array<Enrollment>;
  evaluationMethod: EvaluationMethod;
  evaluationMethods: Array<EvaluationMethod>;
  group?: Maybe<Group>;
  groups: Array<Group>;
  login: AuthPayload;
  me?: Maybe<User>;
  representativeGroup?: Maybe<RepresentativeGroup>;
  representativeGroups: Array<RepresentativeGroup>;
  schedules: Array<Schedule>;
  school: School;
  semester: Semester;
  semesters: Array<Semester>;
  taskType: TaskType;
  taskTypes: Array<TaskType>;
  teacher: Teacher;
  teachers: Array<Teacher>;
  unities: Array<Unity>;
  unity: Unity;
  userUnities: Array<UnityActivity>;
  userUnity: UnityActivity;
};


export type QueryCourseArgs = {
  id: Scalars['Int'];
};


export type QueryCoursesArgs = {
  level?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryEnrollmentArgs = {
  id: Scalars['Int'];
};


export type QueryEnrollmentDetailArgs = {
  id: Scalars['Int'];
};


export type QueryEnrollmentDetailsArgs = {
  enrollmentId: Scalars['Int'];
};


export type QueryEvaluationMethodArgs = {
  id: Scalars['Int'];
};


export type QueryEvaluationMethodsArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryGroupArgs = {
  id: Scalars['Int'];
};


export type QueryGroupsArgs = {
  courseName?: Maybe<Scalars['String']>;
  semesterId?: Maybe<Scalars['Int']>;
};


export type QueryLoginArgs = {
  nickname: Scalars['String'];
  password: Scalars['String'];
};


export type QueryRepresentativeGroupArgs = {
  id: Scalars['Int'];
};


export type QueryRepresentativeGroupsArgs = {
  semesterId?: Maybe<Scalars['Int']>;
};


export type QuerySchedulesArgs = {
  groupId: Scalars['Int'];
};


export type QuerySemesterArgs = {
  id: Scalars['Int'];
};


export type QueryTaskTypeArgs = {
  id: Scalars['Int'];
};


export type QueryTeacherArgs = {
  id: Scalars['Int'];
};


export type QueryTeachersArgs = {
  names: Scalars['String'];
};


export type QueryUnitiesArgs = {
  groupId: Scalars['Int'];
};


export type QueryUnityArgs = {
  id: Scalars['Int'];
};


export type QueryUserUnitiesArgs = {
  groupId: Scalars['Int'];
};


export type QueryUserUnityArgs = {
  id: Scalars['Int'];
};

export type RepresentativeGroup = {
  __typename?: 'RepresentativeGroup';
  course: Course;
  courseId: Scalars['Int'];
  groups: Array<Group>;
  id: Scalars['ID'];
  minimumScore: Scalars['Float'];
  schedules: Array<Schedule>;
  section: Scalars['String'];
  semester: Semester;
  semesterId: Scalars['Int'];
  teacher?: Maybe<Teacher>;
  teacherId?: Maybe<Scalars['Int']>;
  unities: Array<Unity>;
};

export type Schedule = {
  __typename?: 'Schedule';
  classroom: Scalars['String'];
  day: Scalars['Int'];
  finalHour: Scalars['Int'];
  group: RepresentativeGroup;
  id: Scalars['ID'];
  representativeGroupId: Scalars['Int'];
  startHour: Scalars['Int'];
};

export type School = {
  __typename?: 'School';
  curriculums: Array<Curriculum>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Semester = {
  __typename?: 'Semester';
  enrollments: Array<Enrollment>;
  finishDate?: Maybe<Scalars['DateTime']>;
  groups: Array<RepresentativeGroup>;
  id: Scalars['ID'];
  isCurrent: Scalars['Boolean'];
  name: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
};

export type Task = {
  __typename?: 'Task';
  evaluationMethod: EvaluationMethod;
  evaluationMethodId: Scalars['Int'];
  evaluationOrder?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  indicator: Indicator;
  indicatorId: Scalars['Int'];
  isFinished: Scalars['Boolean'];
  order: Scalars['Int'];
  presentationDate?: Maybe<Scalars['DateTime']>;
  taskType: TaskType;
  taskTypeId: Scalars['Int'];
  userTasks: Array<TaskActivity>;
  weight: Scalars['Int'];
};

export type TaskActivity = {
  __typename?: 'TaskActivity';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  score?: Maybe<Scalars['Float']>;
  task: Task;
  taskId: Scalars['Int'];
  unityActivity: UnityActivity;
  unityActivityId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type TaskType = {
  __typename?: 'TaskType';
  activities: Array<Task>;
  id: Scalars['ID'];
  name: Scalars['String'];
  tasks: Array<Task>;
};

export type Teacher = {
  __typename?: 'Teacher';
  groups: Array<RepresentativeGroup>;
  id: Scalars['ID'];
  lastname: Scalars['String'];
  name: Scalars['String'];
};

export type Unity = {
  __typename?: 'Unity';
  description: Scalars['String'];
  group: RepresentativeGroup;
  id: Scalars['ID'];
  indicators: Array<Indicator>;
  isFinished: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  representativeGroupId: Scalars['Int'];
  scores: Array<UnityActivity>;
  weight: Scalars['Float'];
};

export type UnityActivity = {
  __typename?: 'UnityActivity';
  createdAt: Scalars['DateTime'];
  enrollmentDetail: EnrollmentDetail;
  enrollmentDetailId: Scalars['Int'];
  id: Scalars['ID'];
  score?: Maybe<Scalars['Float']>;
  tasks: Array<TaskActivity>;
  unity: Unity;
  unityId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  code: Scalars['String'];
  curriculum: Curriculum;
  curriculumId: Scalars['Int'];
  enrollments: Array<Enrollment>;
  id: Scalars['ID'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  semesterId: Scalars['Float'];
  semesterIn: Semester;
  state: Scalars['Boolean'];
};

export type UserAuthInput = {
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type LoginQueryVariables = Exact<{
  nickname: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', id: string, name: string, lastname: string, curriculumId: number, curriculum: { __typename?: 'Curriculum', school: { __typename?: 'School', name: string } } } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string, lastname: string, curriculumId: number, curriculum: { __typename?: 'Curriculum', school: { __typename?: 'School', name: string } } } | null | undefined };

export type SignUpMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', id: string, name: string, lastname: string, curriculumId: number, curriculum: { __typename?: 'Curriculum', school: { __typename?: 'School', name: string } } } } };

export type UserInfoFragment = { __typename?: 'User', id: string, name: string, lastname: string, curriculumId: number, curriculum: { __typename?: 'Curriculum', school: { __typename?: 'School', name: string } } };

export const UserInfoFragmentDoc = gql`
    fragment UserInfo on User {
  id
  name
  lastname
  curriculumId
  curriculum {
    school {
      name
    }
  }
}
    `;
export const LoginDocument = gql`
    query Login($nickname: String!, $password: String!) {
  login(nickname: $nickname, password: $password) {
    token
    user {
      ...UserInfo
    }
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      nickname: // value for 'nickname'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SignUpDocument = gql`
    mutation SignUp($username: String!, $password: String!) {
  signup(username: $username, password: $password) {
    token
    user {
      ...UserInfo
    }
  }
}
    ${UserInfoFragmentDoc}`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;